

import React,{useState, useEffect} from 'react';

import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import  Button  from "react-bootstrap/Button";
import Topbar from "../topbar/Topbar";
import { getAuthUser } from "../../helper/Storage";
import  './update_sup.css'

function Update_sup(){

    const{id}= useParams();
    const auth = getAuthUser();
    const [data, setData] = useState({
    name: "",
    email: "",
    phone:"",
    status:"",
    // type: "",
    loading: false,
    reload: false,
    success: null,
  });
  
    const navigate= useNavigate()
   

    setData({...data, loading: true}) ;
    function handleSubmit(e) {
        e.preventDefault();
        axios
          .put('http://localhost:8081/user/' +id, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            status: data.status,
         
          }, {
            headers: {
              token: auth.token,
            },
          })
          .then((res) => {
            console.log(res.data);
            navigate('/homess');
          })
          .catch((err) => console.log(err));
      }
    useEffect(() => {
      axios
        .get("http://localhost:8081/user/getuser" + id)
        .then((res) => {
          setData({
            ...data,
            name: res.data.name,
            email: data.email,
            phone: data.phone,
            status: data.status,
       
          });
        })
        .catch((err) => {
          setData({
            ...data,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later !",
          });
        });
    }, [data.reload]);
  



    return(
      <div> 
    <Topbar/>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3">
        
            <Form onSubmit={handleSubmit} >
                <h1>Update supervisor</h1>

                <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        className="form-control" value={data.name }
        onChange={(e)=> setData({...data, name: e.target.value})} />
      </Form.Group>         


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        className="Form-control"  value={data.email}
        onChange={(e)=> setData({...data, email: e.target.value})}/>
      </Form.Group>
{/* 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        className="Form-control" 
        onChange={e=> setPassword(e.target.value)}/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" phone="Phone"
        className="Form-control"  value={data.phone}
        onChange={(e)=> setData({...data, phone: e.target.value})} />
      </Form.Group>
{/* 
      <Form.Group className="mb-3" controlId="formBasicStatus">
        <Form.Label>Status</Form.Label> value={status}
        <Form.Control type="status" placeholder="Status"
        className="form-control" 
        onChange={e=> setStatus(e.target.value)} />
      </Form.Group> */}

<Form.Group className="mb-3" controlId="formBasicStatus">

<div >
<Form.Label>Status
<Form.Control type="status" placeholder="Status"></Form.Control>
                <select value={data.status} onChange={(e) => setData({...data, status: e.target.value})}>
                    <option value="active">active</option>
                    <option value="in-active">inactive</option>
                </select></Form.Label> 

            </div>


                    
  
  </Form.Group> 




      
      
      <Button className="btn btn-dark" variant="primary" type="submit">
        Update
      </Button>
                

              
            </Form>

        </div>
        </div>
        </div>
    )
}


export default Update_sup
