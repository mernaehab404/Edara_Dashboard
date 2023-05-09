import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Add from './Add';
import Read from './Read'
import Update from './Update'
import App from "./App"


 export const routes = createBrowserRouter([
    
            {
                path: '/homess',
                element: <Home/>,
                
                    
            },
            {
                path:'/users',
                element:<Add />,
            },
        
            {
                path:'/read/:id' ,
                element:<Read />,
        
            },
        
            {
                path:'/update/:id', 
                element:<Update />
             },
                
            
              
          

        
    
    
  ]);