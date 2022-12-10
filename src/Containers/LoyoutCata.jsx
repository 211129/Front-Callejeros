<<<<<<< HEAD
=======
import  CardCatalogo from "../Components/CardCatalogo";
>>>>>>> 2eee544da4b70a6d6f43dad295f73a12312c20e3
import Header from "../Components/Header";


function LoyoutCata({children}){

    return(
      <>
        <Header></Header>
          {children}
        <CardCatalogo></CardCatalogo> 
       </>
    )
}

export default LoyoutCata;