import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
//import Home from './css/Home.css'



function Home() {
    const [data, setData]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/homess')
        .then(res => setData(res.data))
        .catch(err => console.log(err))

},[])

  const handleDelete = async (id)=> {
     await axios.delete('http://localhost:8081/delete/'+id)
     .then(res => {
       window.location.reload();
    })
         .catch(err => console.log(err))


 }




    return (
      <div className="Home_container">
        <div className="w-70 bg-white rounded p-3">
            <h2> Manage Supervisore</h2>

            <div className="d-flex justify-content-end">
                <Link to ="/users">
                 <Button variant="success">Add +</Button></Link>
                
            </div>


            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th> Email</th>
                        <th> Passward</th>
                        <th> Phone</th>
                        <th> Status</th>
                        <th> type</th>
                        <th> Name</th>
                        <th> actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(( users, index) =>{
                        return<tr key={index}>
                            <td> {users.id}</td>
                            <td> {users.email}</td>
                            <td> {users.password}</td>
                            <td> {users.phone}</td>
                            <td> {users.status}</td>
                            <td> {users.type}</td>
                            <td> {users.name}</td>
                            <td> {users.actions}</td>
                            <td>
                                <Link to={`/read/${users.id}`}> <Button variant="dark" className="m-1">Show</Button></Link>
                                <Link to={`/update/${users.id}`} ><Button variant="dark" className="m-1">update</Button> </Link>
                                 <Button  onClick={ ()=> handleDelete(users.id)} variant="dark">Delete</Button>  
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
      </div>
    );
  }
  
  export default Home;