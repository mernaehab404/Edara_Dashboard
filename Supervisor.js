import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../css/Login.css';
// import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import {setAuthUser} from '../../helper/Storage';

const Supervisor =() =>{
    const [register, setRegister] = useState({
        email: '',
        password: '',
        loading: false,
        name: "",
        err:[]
    });

    const RegisterFun = (e) =>{
        e.preventDefault();
        setRegister({...register, loading: true, err: []})
        axios.post("http://localhost:4000/auth/register" , {
            email: register.email,
            password: register.password,
            name: register.name,
        })
        .then(resp => {
            setRegister({...register, loading: false, err: [] });
            setAuthUser(resp.data);
        })
        .catch(errors => {
            setRegister({
                ...register, 
                loading: false, 
                err: errors.response.data.errors,
            });
        });
    };

    return (
        <div className="login-container">
        <h2 className="text-2xl font-bold text-center mb-4">Supervisor</h2>
        {register.err.map((error, index ) => (
            <Alert key= {index} variant="danger" className="p-2">
                {error.msg}
            </Alert>
        ))}

        <Form onSubmit={RegisterFun}>

            <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Full Name " 
                value={register.name} 
                onChange={(e) => setRegister({...register, name: e.target.value })}/>
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Control type="email" placeholder="Email "
                value={register.email} 
                onChange={(e) => setRegister({...register, email: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control type="password" placeholder="Password " 
                value={register.password} 
                onChange={(e) => setRegister({...register, password: e.target.value })}/>
            </Form.Group>

            <Button className="btn btn-dark w-100" variant="primary" type="submit"
            disabled = {register.loading ===true}>
                Login
            </Button>
            
        </Form>
      </div>
    );
};
export default Supervisor;