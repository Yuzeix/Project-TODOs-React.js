import React from 'react'
import { useStorageTodo } from './LocalStorage'

const TodoContext = React.createContext();

function TodoProvider ({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useStorageTodo('TARGET_LIST_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      
      const handleClick = () => {
        setOpenModal(!openModal);
      };

      const completedTodos = todos.filter (todo =>  !!todo.completed).length;
      
      const totalTodos = todos.length;
    
    
    
      const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,        });
        saveTodos(newTodos);
      }
        
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex (
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
          
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex (
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            completedTodos,
            deleteTodo,
            filteredTodos,
            openModal,
            setOpenModal,
            handleClick,
            addTodo
        }}>
        {children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider }
