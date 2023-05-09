import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Read(){
    const {id}= useParams();
    const [users, setUsers]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setUsers(res.data[0]);
        })
        .catch(err => console.log(err))

    },[])




    return(
        <Card style={{ width: '18rem' }}  className="m-5">
        <Card.Body>
        <Card.Title>Supervisor Detail</Card.Title>
        <Card.Text>
           <h2> {users.id} </h2>
           <h2>{users.email}</h2>
           <h2>{users.password}</h2>
           <h2>{users.phone}</h2>
           <h2>{users.status}</h2>
           <h2>{users.type}</h2>
           <h2>{users.name}</h2>
        </Card.Text>
        <Link to="/homess" >
            <Button variant="dark">back</Button></Link>
      </Card.Body>
    </Card>
        

         

           

           
           
          
    );
}

export default Read