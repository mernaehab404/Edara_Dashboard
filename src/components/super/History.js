
import React, { useState ,useEffect } from 'react'
// import './Showw.css';
import Topbar from "../topbar/Topbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getAuthUser } from '../../helper/Storage';

export default function History() {
    const user= getAuthUser;
    const{userID}= useParams();
    const [data, setData]= useState({
        loading: true,
        results: [], 
        err: null,
        reload: 0,
      });
   
 
     useEffect(()=>{
        setData({ ...data, loading: true });
        axios.get(`http://localhost:8081/newReq/userRequests/`+userID, {
  headers: {
    token: user.token
  }
})
         .then((res) => {
            setData({ ...data, results: res.data, loading: false, err: null });
         })
         .catch((err) => {
            setData({
            ...data,
            loading: false,
            err: " something went wrong, please try again later ! ",
          });
 
 });
},[data.reload])
 
 

  return (
    
       <div className=" showw">
        <Topbar/>
        <h1> History </h1>
          <div className="table">

           <table className='showtable'>
        
                     <thead>
                         <tr>
                             <th> userID </th>
                             <th> quantity </th>
                             <th> productID </th>
                             <th> warehouseID </th>
                             <th> transaction </th>
                             <th> Action </th>
                         </tr>
                     </thead>
    
                     <tbody>
                         {data.results.map((req) => (
                             <tr  key={req.id}>
                                 <td> {req.userID} </td>
                                 <td> {req.quantity} </td>
                                 <td> {req.productID} </td> 
                                 <td> {req.warehouseID} </td>
                                 <td> {req.transaction} </td>
                    
                                 <td>
                                     <button type='submit'> Accept </button>
                                     <button type='submit'> Decline</button>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
    
                 </table>
    
                 </div>
    </div>
  )
}
