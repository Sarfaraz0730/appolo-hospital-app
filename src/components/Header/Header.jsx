import React from 'react'
import {Link} from "react-router-dom"

import './Header.css'

const Header = () => {
  return (
    <div>
       <div className='navset'>
           <nav className='navbar'>
               <ul>
                  
                   <li> <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwouBlJIBejXAn5xMw3WxPnBJYtbAlPyTx7A9SQJIBU0VUA7Nu" alt="" height={"50px"} width={"60px"} /></li>
                  
                  
                
                  <li> <a href="">CONSULT</a></li>
                   <li> <a href="#">MONITOR</a></li>
                   <li> <a href="#">ORDER</a></li>
                   
                   <li> <a href="#">SHOP</a></li>
                   <li> <a href="#">SUBSCRIBE</a></li>
                   <li> <a href="#">DOCTOR</a></li>

                <li>    <Link to ="/Doctor"> Doctor</Link> </li>
               
                
               </ul>
           </nav>
      
       </div>
    </div>
  )
}

export default Header