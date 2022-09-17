import React from "react";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Todo(props) {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleDelete = (id) => {
    console.log({ id });
    props.deleteTodos(id);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <span>{title}</span>
          <Button
            className="fa fa-trash fa "
            onClick={() => handleDelete(id)}
          ></Button>
        </CardHeader>
        <Card.Body>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Todo;
