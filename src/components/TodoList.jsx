import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
  
  const {todoListArr} = props
  return (
    <ul className='w-[32%] main overflow-y-auto h-[500px]'>
      {
        todoListArr.map((todoItem, todoIndex) =>{
          return(
            <TodoCard {...props} key={todoIndex} index={todoIndex}>
              <p> {todoItem}</p>
            </TodoCard>
          )

        })
      }
      
    </ul>
  )
}

export default TodoList
