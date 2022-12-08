import Home from "./Pages/Home"
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./Pages/Catalogo";
import Landing from "./Pages/Landing";


function App() {
 
  return (

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/plantilla" element={<Catalogo/>}/>
       <Route path="/landing"  element={<Landing/>}/>
       <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
