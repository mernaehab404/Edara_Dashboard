import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function Update_sup(){

    const{id}= useParams();

    
    const [email, setEmail] = useState([id].email);
    // const [password, setPassword] = useState([id].password);
    const [phone, setPhone] = useState([id].phone);
    const [status, setStatus] = useState([id].status);
    const [type, setType] = useState([id].type);
    const [name, setName] = useState([id].name);
    
    const navigate= useNavigate()
   
    function handleSubmit(event) {
        event.preventDefault();
        axios
          .put('http://localhost:8081/update/' +id, {  email  ,phone,status,type, name })
          .then((res) => {
            console.log(res.data);
            navigate('/homess');
          })
          .catch((err) => console.log(err));
      }



    // const [values, setValues]= useState({
    //     id : '' , 
    //     emai : '',
    //     password : '',
    //     token : '', 
    //     phone : '',
    //     status : '',
    //     name : ''

    // })
    // const handleUpdate= (e)=>{
    //     e.preventDefault();
    //     axios.put('http://localhost:8081/update/'+id,values)
    //     .then(res=>{
    //         console.log(res);
    //         navigate('/')
    //     }).catch(err=> console.log(err));
    // }

    return(
        <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit} >
                <h2>Update supervisor</h2>
                {/* <div className="mb-2">
                    <label htmlFor=""> id </label>
                    <input type="text" placeholder="Enter Id" className="form-control" values={values.id}
                    onChange={e=> setValues({ values, id:e.target.value})}/>
                </div> */}

                <div className="mb-2">
                    <label htmlFor=""> Email </label>
                    <input type="text" placeholder="Enter Email" className="form-control" 
                     onChange={e=> setEmail(e.target.value)}/>
                </div>

                {/* <div className="mb-2">
                    <label htmlFor=""> Password </label>
                    <input type="text" placeholder="Enter Password" className="form-control" 
                    onChange={e=> setPassword(e.target.value)}/>
                </div> */}

                {/* <div className="mb-2">
                    <label htmlFor=""> token </label>
                    <input type="text" placeholder="Enter token" className="form-control" values={values.token}
                    onChange={e=> setValues({ values, token:e.target.value})}/>
                </div> */}

                <div className="mb-2">
                    <label htmlFor=""> Phone </label>
                    <input type="number" placeholder="Enter Phone" className="form-control" 
                    onChange={e=> setPhone(e.target.value)}/>
                </div>

                <div className="mb-2">
                    <label htmlFor=""> Status </label>
                    <input type="text" placeholder="Enter Status" className="form-control" 
                    onChange={e=> setStatus(e.target.value)}/>
                </div>

                <div className="mb-2">
                    <label htmlFor=""> type </label>
                    <input type="text" placeholder="Enter type" className="form-control" 
                    onChange={e=> setType(e.target.value)}/>
                </div>

                <div className="mb-2">
                    <label htmlFor=""> Name </label>
                    <input type="text" placeholder="Enter Name" className="form-control" 
                    onChange={e=> setName(e.target.value)}/>
                </div>

                <button className="btn btn-success">Ubdate</button>

            </form>

        </div>
          </div>
    )
}

export default Update_sup;