import React, { useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import {getAuthUser} from "../../helper/Storage";
import './style/Form.css';


const AddForm=()=>{
  const auth = getAuthUser();
  const [data, setData] = useState({
    name: "",
    location: "",
    status: "active", 
  });
  



    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("warehouse added");


        setData({...data, loading: true}) ;
 
axios.post('http://localhost:8081/warehouses/add', {
  name: data.name,
  location: data.location,
  status: data.status,
}, {
  headers: {
    token: auth.token,
  },
})
        .then((res) => {
          setData({
      name: "",
      location : "",  
      status : "",
          err: null,
          loading: false,
          success: "warehouse Created Successfully !",
    });
           navigate('/warehouses')

        })
        .catch((err) => {
          setData({
            ...data,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later !",
          });
        });
      };
      

  return (
    <div className='addd'> 
      <Topbar/>
     
    <div className='addForm'>
      
         <form onSubmit={handleSubmit}>
            <div className='name'>
                <label for="name">
                    name : <br/>
                </label>
              
                <input 
                    id='name'
                    required
                    type='text'
                    value={data.name}
                    onChange={(e)=> setData({ ...data, name: e.target.value })}
                />
            </div>

            <div className='location'>
                  <label for="location">
                    location : <br/>
                  </label>
              
                  <input 
                    id='location'
                    type='text'
                    required
                    value={data.location}
                    onChange={(e)=> setData({ ...data, location: e.target.value })}
                  />
            </div>    


            <div className='status'>
                  <label for="status">
                    status : <br/>
                  </label>
                <select value={data.status} 
                onChange={(e)=> setData({ ...data, status: e.target.value })}>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>
            </div>


            <div className='submit'>
                <button>
                    Submit
                </button>
            </div>    
         </form>    

         </div>
    </div>
  )



}

export default AddForm;