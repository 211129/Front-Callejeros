import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./Pages/Catalogo";
<<<<<<< HEAD

=======
import Landing from "./Pages/Landing";
>>>>>>> 2eee544da4b70a6d6f43dad295f73a12312c20e3


function App() {
 
  return (

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/plantilla" element={<Catalogo/>}/>
<<<<<<< HEAD
=======
       <Route path="/landing"  element={<Landing/>}/>
>>>>>>> 2eee544da4b70a6d6f43dad295f73a12312c20e3
       <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
