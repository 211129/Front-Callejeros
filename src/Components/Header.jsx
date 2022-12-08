import '../assets/Styles/header.css';

import { Outlet, Link } from "react-router-dom";

function Header() {

   return (

      <div className='cotainer--header'>
         <nav className="navbar">
            <div className="inner-width">
               <a href="/" className="logo"></a>
               <h1 >Callejeros</h1>
               <br></br>

<<<<<<< HEAD
             <div className="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link> 
                <Link to="/plantilla">Catalogo</Link>
                <Link to="/Cartr">Pedido</Link>
             
             </div>
             
         </div>
       
       </nav>
       <Outlet />
     
=======
               <button className="menu-toggler">
>>>>>>> 6f67687504d5472cb53365d55783c15c5384e139

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

}

export default Header;