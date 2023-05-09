
import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import  Button  from "react-bootstrap/Button";
import  './css/update_sup.css'

function Update(){

    const{id}= useParams();

    
    const [email, setEmail] = useState([id].email);
    const [password, setPassword] = useState([id].password);
    const [phone, setPhone] = useState([id].phone);
    const [status, setStatus] = useState([id].status);
    const [type, setType] = useState([id].type);
    const [name, setName] = useState([id].name);
    
    const navigate= useNavigate()
   
    function handleSubmit(event) {
        event.preventDefault();
        axios
          .put('http://localhost:8081/update/' +id, {  email ,password ,phone,status,type, name })
          .then((res) => {
            console.log(res.data);
            navigate('/homess');
          })
          .catch((err) => console.log(err));
      }




    return(
        <div className="update_container">
        
            <Form onSubmit={handleSubmit} >
                <h1>Update supervisor</h1>

                <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        className="form-control" 
        onChange={e=> setName(e.target.value)} />
      </Form.Group>         


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        className="Form-control" 
        onChange={e=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        className="Form-control" 
        onChange={e=> setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="Phone"
        className="Form-control" 
        onChange={e=> setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control type="status" placeholder="Status"
        className="form-control" 
        onChange={e=> setStatus(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Type</Form.Label>
        <Form.Control type="type" placeholder="Type"
         className="form-control" 
         onChange={e=> setType(e.target.value)}/>
      </Form.Group>

      
      
      <Button className="btn btn-dark" variant="primary" type="submit">
        Update
      </Button>
                

              
            </Form>

        </div>
          
    )
}


export default Update