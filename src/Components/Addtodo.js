import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';


const AddTodo = () => {
  let dispatch = useDispatch();
  let [todo,setTodo] = useState('')
  const Added = ()=> {
    dispatch(AddTodo({id:Math.random(), task:todo, isDone : false}))
    setTodo('')
  }
  return (
    <div>
        <Form style={{display : "flex", justifyContent : "center"}}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="Enter to-do" />
           </Form.Group>
           <Button onClick={Added} variant="primary"> ADD to-do </Button>{' '}
        </Form>
    </div>
  )
}
export default AddTodo


