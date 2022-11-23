import CardCatalogo from '../Components/CardCatalogo';
import trip1 from '../assets/Img/trip1.jpeg';
import bob1 from'../assets/img/bob1.jpeg';
import bad1 from'../assets/img/bad1.jpeg';
import Marvel1 from '../assets/Img/Marvel1.jpeg';
import sim from '../assets/Img/sim.jpeg'
import '../assets/styles/Catalogo.css';
import Plantilla from './Plantilla';



function Catalogo() {

    const products = [
        {
            id:1,
            img: trip1,
            name: "Playera Trip",
            price: "$130",
        },
        {
            id:2,
            img:bad1,
            name: "Playera Bad Bunny",
            price: "$130",
        },
        {
            id: 3,
            img:bob1,
            name: "Playera bob esponja",
            price: "$140",
        },
        {
            id:4,
            img:Marvel1,
            name: "Playera Marvel",
            price: "$140",
        },
        {
            id: 5,
            img:sim,
            name: "Playera rugrats",
            price: "$140",
        },
    ];

    return (
        <div className='App'>

            <Plantilla>
            
                    <div className='container-body'>
                         
                            {products.map((product) => {
                                return (
                                    <CardCatalogo 
                                        key={product.id}
                                        img={product.img}
                                        name={product.name}
                                        price={product.price}
                                    />
                            
                                )
                            })}
                        
                    </div>
                
            </Plantilla>


        </div>
        
    );
}

export default Catalogo;