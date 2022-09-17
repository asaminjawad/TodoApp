import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getNewTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <Container className="mb-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Todo"
            onChange={handleChange}
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            name="desc"
            as="textarea"
            onChange={handleChange}
            value={desc}
          />
        </Form.Group>
        <Button type="submit">Add todo</Button>
      </Form>
    </Container>
  );
}

export default NewTodo;
