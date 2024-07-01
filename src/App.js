import { useState, useEffect } from "react";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todoListArr, setTodoListArr] = useState([]);

  const [todoValues, setTodoValues] = useState("");


  function getSavedData(newList){
    localStorage.setItem('todoListArr', JSON.stringify({todoListArr: newList}))
  }


  function getTodoList(newTodoArr){
    const newListArr = [...todoListArr, newTodoArr]
    getSavedData(newListArr)
    setTodoListArr(newListArr);

  }

  function handlerEditTodoList(index){
    const valueToBeEdited = todoListArr[index] 
    setTodoValues(valueToBeEdited);
    handlerDeteleTodoList(index)

  }

  function handlerDeteleTodoList(index){
    const newTodoList = todoListArr.filter((todo, todoIndex)=>{
      return todoIndex !== index;
    });
    getSavedData(newTodoList)

    setTodoListArr(newTodoList);

  }

  useEffect(()=>{

    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todoListArr')
    if(!localTodos){
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todoListArr;

    setTodoListArr(localTodos)

  }, [])

  return (
    <>
      <main className="flex flex-col items-center">
        <h2 className="p-0 text-center font-bold underline mt-2 text-red-600">
          This Is First TodoList
        </h2>

        <TodoInput todoValues={todoValues} setTodoValues={setTodoValues} getTodoList={getTodoList}/>
        <TodoList todoListArr ={todoListArr} handlerDeteleTodoList={handlerDeteleTodoList} handlerEditTodoList={handlerEditTodoList}/>
      </main>
    </>
  );
}

export default App;
