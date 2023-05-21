import React from 'react'
import './TodoButton.css'
import { TodoContext } from '../TodoContext';


function TodoButton () {
  const {
    handleClick
  } = React.useContext(TodoContext)

    return (
      <button className="TodoButton" 
      onClick={handleClick}
      >+</button>
    );
}

export { TodoButton };