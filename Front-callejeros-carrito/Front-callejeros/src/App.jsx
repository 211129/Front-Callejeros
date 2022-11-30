import Home from "./Pages/Home"
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import Plantilla from "./Pages/Plantilla";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./Pages/Catalogo";
import Cart from "./Pages/Cart";


function App() {
 
  return (

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/plantilla" element={<Catalogo/>}/>
       <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
