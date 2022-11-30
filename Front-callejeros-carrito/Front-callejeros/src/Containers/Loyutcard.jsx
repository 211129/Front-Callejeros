import  CartProduct from "../Components/CartProduct"
import Header from "../Components/Header";


function LoyoutCard({children}){

    return(
      <>
        <Header></Header>
          {children}
        {/* <CardCatalogo></CardCatalogo> */}
       </>
    )
}

export default LoyoutCard;