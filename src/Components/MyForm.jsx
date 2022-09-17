import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function MyForm() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Todo Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="desc" placeholder="Description" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default MyForm;
