import bob1 from'../assets/Img/bob1.png';
import bad1 from'../assets/Img/bad1.png';
import Marvel1 from '../assets/Img/Marvel1.png';
import sin from '../assets/Img/sin.png';
import CardCatalogo from '../Components/CardCatalogo';
import '../assets/Img/Marvel1.png';

import '../assets/Styles/Catalogo.css';

const ProductItem = ({ data, addToCart }) => {
  let { id, img, name, price } = data;

  return (
    <div className='card' style={{ border: "thin solid gray", padding: "1rem" }}>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Añadir al carrito</button>
    </div>
    
  );
};

export default ProductItem;