import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import NewTodo from "./NewTodo";
import SavedTodos from "./SavedTodos";
import { v4 as uuidv4 } from "uuid";

function Home() {
  let [todos, setTodos] = useState([]);

  const getNewTodo = (todo) => {
    setTodos((preTodo) => {
      return [...preTodo, { id: uuidv4(), todo }];
    });
  };

  const deleteTodos = (id) => {
    setTodos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div>
      <Container>
        <NewTodo getNewTodo={getNewTodo} />
        <SavedTodos todos={todos} deleteTodos={deleteTodos} />
      </Container>
    </div>
  );
}

export default Home;
