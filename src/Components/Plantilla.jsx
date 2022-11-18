import Header from "./Header";
import Footer from "./Footer";
function Plantilla({children}){
    return(
        <>
        <Header></Header>
        {
            children
            
        }
        <Footer></Footer>

        </>
    );
}
export default Plantilla;