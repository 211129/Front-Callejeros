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