import React from 'react'
import "./TodoTittle.css"
import { TodoContext } from '../TodoContext';


function TodoTittle () {
  const {
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext)

    return (
      <h1 className="TodoTittle">
         Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> objetivos
      </h1>
    );
}

export { TodoTittle };