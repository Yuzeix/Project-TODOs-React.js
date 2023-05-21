import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="todos-loading">
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="loading-message">
        <span className="loading-text">Gestionando</span>
        <span className="loading-text">recursos</span>
        <span className="loading-dot"></span>
      </div>
    </div>
  );
}

export { TodosLoading };