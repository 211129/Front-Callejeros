import '../assets/Styles/header.css';
import Cart from './Cart';

import { Outlet, Link } from "react-router-dom";

function Header() {

   return (

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
                  <Link to="/landing">Preventa</Link>

               </div>

            </div>

         </nav>
      </div>


   )

}

export default Header;