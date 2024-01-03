
import React from 'react';
import Notfound from './not-found';

const fechTodo = async (id:string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const result = await res.json();
    return result;
}

const TodoPage = async(props: any) => {
    const todoId = props.params.todoId;
    const todo = await fechTodo(todoId);
    if (!todo.id) return Notfound();
  return (
      <div>
          <p>#{todo.id}: {todo.title}</p>
          <p>Completed : {todo.completed ? "Yes" : "No"}</p>
          <p>By User: {todo.userId}</p>
      </div>
  )
}

export default TodoPage;