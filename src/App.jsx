import Home from "./Pages/Home"
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import Cart from "./Pages/Cart";
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
       <Route path="/plantilla" element={<Plantilla/>}/>
       
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
