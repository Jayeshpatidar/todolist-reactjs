import React from 'react'

export default function TodoCard(props) {

  const {children, handlerDeteleTodoList, index, handlerEditTodoList} = props
  return (
    <>
      <li className='todoItem'>
        {children}
        <div className='actionContainer flex gap-2'>

          <button onClick={()=>{ handlerEditTodoList(index)}}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={()=>{handlerDeteleTodoList(index)}}>
            <i className="fa-solid fa-trash-arrow-up"></i>
          </button>
        </div>
      </li>
    </>
    
  )
}
