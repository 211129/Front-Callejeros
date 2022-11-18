import '../assets/Styles/header.css';

import {  Outlet, Link } from "react-router-dom";

function Header(){

return(

    
    <div>
      
       <nav className="navbar">
         <div className="inner-width">
            <a href="/" className="logo"></a>
            <p >Callejeros stylo</p>
            <br></br>
            
           
            
             <button className="menu-toggler">
 <span></span>
                <span></span>
                <span></span>
             </button>

             <div className="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link> 
                <Link to="/">Catalogo</Link>
             
             </div>
             
         </div>
       
       </nav>
       <Outlet />
     

    </div>
    

)

}

export default Header;