import React from 'react'
import { TodoTittle } from '../TodoTittle';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton/index.js';
import { TodosEmpty } from '../TodosEmpty';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUI () {

    const {
        loading,
        error,
         completeTodo,
        deleteTodo,
        filteredTodos,
        openModal
    } = React.useContext(TodoContext)

    return (
        <>
        <TodoTittle />
        <TodoSearch />
        

        <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && filteredTodos.length === 0) && <TodosEmpty/>}
            {filteredTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo (todo.text)}
            onDelete={() => deleteTodo (todo.text)}
            />
            ))}
        </TodoList>
        
        <TodoButton />

        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
        
        </>
    )
}

export {AppUI};