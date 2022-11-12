import Home from "./Pages/Home"
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import Nopage from "./Pages/Nopage"
import { BrowserRouter, Routes, Route } from "react-router-dom";








function App() {
 

  return (

    <BrowserRouter>
    <Routes>
     
        <Route index element={<Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<Nopage />} />
      
    
    
    </Routes>

   
  </BrowserRouter>
   
  )
}

export default App
