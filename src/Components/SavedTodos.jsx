import React from "react";
import Todo from "./Todo";

function SavedTodos(props) {
  console.log(props.todos);

  return (
    <section>
      {props.todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          deleteTodos={props.deleteTodos}
        />
      ))}
    </section>
  );
}

export default SavedTodos;
