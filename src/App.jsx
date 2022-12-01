import Home from "./Pages/Home"
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import Cart from "./Pages/Cart";
import Plantilla from "./Pages/Plantilla";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./Pages/Catalogo";
<<<<<<< HEAD
import Cart from "./Pages/Cart";
=======
import Landing from "./Pages/Landing";
>>>>>>> 6f67687504d5472cb53365d55783c15c5384e139


function App() {
 
  return (

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
<<<<<<< HEAD
       <Route path="/plantilla" element={<Plantilla/>}/>
       
=======
       <Route path="/plantilla" element={<Catalogo/>}/>
       <Route path="/landing"  element={<Landing/>}/>
>>>>>>> 6f67687504d5472cb53365d55783c15c5384e139
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
