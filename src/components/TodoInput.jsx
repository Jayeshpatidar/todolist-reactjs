import React, { useState } from "react";

const TodoInput = (props) => {
  const {getTodoList, todoValues, setTodoValues} = props

  return (
    <>
      <div className=" text-[1rem] mt-4 flex justify-between  gap-2 mb-4">
        <input type="text" className="p-2 rounded-md" placeholder="Enter Your Things.." value={todoValues}  onChange={(e)=>{
          setTodoValues(e.target.value)
        }}/>
        <button className="p-2 addBtn border text-cyan-400 bg-white rounded-md" onClick={()=>{
          if(todoValues != ""){
            getTodoList(todoValues);
            setTodoValues("");
          }else{
            alert("Enter Values")
          }
        }}>Add</button>
      </div>
    </>
  );
};

export default TodoInput;
