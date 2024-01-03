import React from 'react'
import TodoList from './TodoList';
import _ from './TodoList.module.css';
const Todos = () => {
  return (
      <div className={_.todoListHeader}>
          <h1>This is where the todos will be listed....</h1>
      </div>
  )
}

export default Todos;