import Footer from "../Components/Footer";

import LoyoutLog from "../Containers/LoyoutLog";

function Login({children}){

    return(

        <>
        
      <LoyoutLog></LoyoutLog>
        {children}
        z<Footer></Footer>
      
       
        
        </>
    )
}

export default Login;