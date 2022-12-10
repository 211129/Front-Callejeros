import CardCatalogo from '../Components/CardCatalogo';
import trip1 from '../assets/Img/trip1.jpeg';
<<<<<<< HEAD
import bob1 from'../assets/Img/bob1.jpeg';
import bad1 from'../assets/Img/bad1.jpeg';
import Marvel1 from '../assets/Img/Marvel1.jpeg';
import sim from '../assets/Img/sim.jpeg';
=======
import bob1 from'../assets/Img/bob1.png';
import bad1 from'../assets/Img/bad1.png';
import Marvel1 from '../assets/Img/Marvel1.png';
import sin from '../assets/Img/sin.png';
>>>>>>> 2eee544da4b70a6d6f43dad295f73a12312c20e3
import champion from '../assets/Img/champion.jpeg';
import hasbulla from '../assets/Img/hasbulla.jpeg';
import jungle from  '../assets/Img/jungle.png';
import amazing from  '../assets/Img/amazing.jpeg';
import sushine from  '../assets/Img/sushine.png';
import Theflow from '../assets/Img/Theflow.png';
import '../assets/styles/Catalogo.css';
<<<<<<< HEAD
import Plantilla from '../Pages/Plantilla'
=======
import Plantilla from '../Pages/Plantilla';
>>>>>>> 2eee544da4b70a6d6f43dad295f73a12312c20e3



function Catalogo() {

    const products = [
        {
            id:1,
            img: trip1,
            name: "Buen Viaje",
        },
        {
            id:2,
            img:bad1,
            name: "Bad Bunny",
        },
        {
            id: 3,
            img:bob1,
            name: "Bob esponja",
        },
        {
            id:4,
            img:Marvel1,
            name: "SpiderMex",
        },
        {
            id: 5,
            img:sin,
            name: "Rugrats",
        },
        {
            id: 6,
            img:champion,
            name: "Boinas",
        },
        {
            id: 7,
            img:hasbulla,
            name: "Hasbulla",
        },
        {
            id: 8,
            img:jungle,
            name: "Jungle",
        },
        {
            id: 9,
            img:amazing,
            name: "amazing",
            
        },
        {
            id: 10,
            img:sushine,
            name: "sushine",
           
        },
        {
            id: 11,
            img:Theflow,
            name: "Theflow",
            
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
                                    />                         
                                )
                            })}
                        
                    </div>
            </Plantilla>
        </div>
        
    );
}

export default Catalogo;