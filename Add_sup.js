
import React, { useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Add_super.css'
function Add_sup(){
    const [values, setValues]= useState({
        //id : "" , 
        email : "",
        password : "",
        //token : "", 
        phone : "",
        status : "",
        name : ""

    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues ({ ...values, [name]: value });
      };



    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/users', values)
        .then(res => {
            console.log(res);
            navigate('/homess')

        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3">
            <h1>Add Supervisor</h1> 
             <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        name="name" value={values.name} onChange={handleInputChange} />
      </Form.Group>         


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        name="email" value={values.email} onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
         name="password" value={values.password} onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="Phone"
        name="phone" value={values.phone} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control type="status" placeholder="Status"
        name="status" value={values.status} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Type</Form.Label>
        <Form.Control type="type" placeholder="Type"
        name="type" value={values.type} onChange={handleInputChange} />
      </Form.Group>

      
      
      <Button className="btn btn-dark" variant="primary" type="submit">
        Add
      </Button>
    </Form>
            

                    

    </div>
              </div>
    )



}

export default Add_sup;
