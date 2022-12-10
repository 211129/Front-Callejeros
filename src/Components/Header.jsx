import '../assets/Styles/header.css';
import Cart from '../Pages/Cart';

import {  Outlet, Link } from "react-router-dom";

function Header(){

return(

<<<<<<< HEAD
    <div>
      
      <nav className="navbar">
         <div className="inner-width">
            <a href="/" className="logo"></a>
            <h1>Callejeros</h1>
            <br></br>
             <button className="menu-toggler"></button>

             <div className="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link> 
                <Link to="/plantilla">Catalogo</Link>
                <Link to="/cart">Comprar</Link>
                
             
             </div>
             
         </div>
       
       </nav> <Outlet />
    </div>
)
=======
      <div className='cotainer--header'>
         <nav className="navbar">
            
            <div className="inner-width">
               <a href="/" className="logo"></a>
               <h1 >Callejeros</h1>
               <br></br>

               <button className="menu-toggler">
                  <span></span>
                  <span></span>
               </button>

               <div className="navbar-menu">
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/plantilla">Catalogo</Link>
                  <Link to="/cart">Comprar</Link>

               </div>

            </div>

         </nav>
      </div>


   )
>>>>>>> 2eee544da4b70a6d6f43dad295f73a12312c20e3

}

export default Header;