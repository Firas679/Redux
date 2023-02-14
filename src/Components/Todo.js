import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Delete } from "./TodoSlice";


function Todo({ el }) {
    let dispatch = useDispatch()
    return (
      <div>
        <h3> {el.task}</h3>
        <Button onClick={()=> dispatch(Delete(el.id))} variant="primary"> Delete </Button>{' '}
      </div>
    );
  };

export default Todo