import Link from 'next/link';
import React from 'react';

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos',{ next : {revalidate :60}});
    const result = await res.json();
    return result;
} 

const TodoList = async() => {
    const todos = await fetchTodos();
  return (
      <>
          {todos && todos?.map((todo:any) => (
              <p key={todo.id}>
                  <Link href={`/todos/${todo.id}`}>
                      Todo: {todo.id}
                  </Link>
              </p>
          ))}
      </>
  )
}

export default TodoList;