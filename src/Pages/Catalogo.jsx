import CardCatalogo from '../Components/CardCatalogo';
import trip1 from '../assets/Img/trip1.jpeg';
import bob1 from'../assets/img/bob1.jpeg';
import bad1 from'../assets/img/bad1.jpeg';
import Marvel1 from '../assets/Img/Marvel1.jpeg';
import sim from '../assets/Img/sim.jpeg';
import champion from '../assets/Img/champion.jpeg';
import hasbulla from '../assets/Img/hasbulla.jpeg';
import jungle from  '../assets/Img/jungle.jpeg';
import amazing from  '../assets/img/amazing.jpeg';
import sushine from  '../assets/Img/sushine.jpeg';
import Theflow from '../assets/img/Theflow.jpeg';
import '../assets/styles/Catalogo.css';
import Plantilla from './Plantilla';



function Catalogo() {

    const products = [
        {
            id:1,
            img: trip1,
            name: "Buen Viaje",
            price: "$130",
        },
        {
            id:2,
            img:bad1,
            name: "Bad Bunny",
            price: "$130",
        },
        {
            id: 3,
            img:bob1,
            name: "Bob esponja",
            price: "$140",
        },
        {
            id:4,
            img:Marvel1,
            name: "SpiderMex",
            price: "$140",
        },
        {
            id: 5,
            img:sim,
            name: "Rugrats",
            price: "$140",
        },
        {
            id: 6,
            img:champion,
            name: "Boinas",
            price: "$100",
        },
        {
            id: 7,
            img:hasbulla,
            name: "Hasbulla",
            price: "$120",
        },
        {
            id: 8,
            img:jungle,
            name: "Jungle",
            price: "$140",
        },
        {
            id: 9,
            img:amazing,
            name: "amazing",
            price: "$140",
        },
        {
            id: 10,
            img:sushine,
            name: "sushine",
            price: "$140",
        },
        {
            id: 11,
            img:Theflow,
            name: "Theflow",
            price: "$140",
        },
      
    ];

    return (
        <div className='App'>

            <Plantilla>
            <br></br>
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