import React , {useState, useEffect} from 'react';
import './Body.css';
import Topbar from "../topbar/Topbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getAuthUser } from "../../helper/Storage";
const Body = () => {
  const{id}= useParams();
  const auth = getAuthUser();
  const [data, setData]= useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });



 useEffect(()=>{
    setData({ ...data, loading: true });
     axios.get('http://localhost:8081/product/related/'+id,)
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
        <div className='content'>
            <Topbar/>
          
           <table className="related-table" >
           <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Description</th>
        <th>Photo</th>
        <th>Stock</th>
      </tr>
</thead> 
<tbody>
{
        data.results.map((dataa,i) => (
          <tr key={i}>
              <td>{dataa.id}</td>
              <td>{dataa.name}</td>
              <td>{dataa.description}</td>
              <td>{dataa.image_url}</td>
              <td>{dataa.stock}</td>

          </tr>
             )  )
            }
        






</tbody>
    

  
</table> 
        </div>  
      
     );
};
 
export default Body;