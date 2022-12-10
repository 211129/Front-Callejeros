import { useReducer } from "react";
import { TYPES } from "../actions/CartController";
import { CartInitState, CartReducer } from "../actions/CartReducer";
import CartItem from "../Components/CartItem";
import ProductItem from "../Components/CartProduct";

import CardCatalogo from '../Components/CardCatalogo';
import trip1 from '../assets/Img/trip1.jpeg';
import bob1 from'../assets/Img/bob1.png';
import bad1 from'../assets/Img/bad1.png';
import Marvel1 from '../assets/Img/Marvel1.png';
import sin from '../assets/Img/sin.png';
import champion from '../assets/Img/champion.jpeg';
import hasbulla from '../assets/Img/hasbulla.jpeg';
import jungle from  '../assets/Img/jungle.png';
import amazing from  '../assets/Img/amazing.jpeg';
import sushine from  '../assets/Img/sushine.png';
import Theflow from '../assets/Img/Theflow.png';
import '../assets/styles/Catalogo.css';
import Plantilla from '../Pages/Plantilla';

const Cart = () =>{

    const [state, dispatch] = useReducer(CartReducer, CartInitState);

    const { products, cart } = state;
  
    const addToCart = (id) => {
      //console.log(id);
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };
  
    const delFromCart = (id, all = false) => {
      //console.log(id, all);
      if (all) {
        dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      } else {
        dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
      }
    };
  
    const clearCart = () => {
      dispatch({ type: TYPES.CLEAR_CART });
    };
  
    return (
      <div>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className="box grid-responsive">
          {products.map((product) => (
            <ProductItem key={product.id} data={product} addToCart={addToCart} />
          ))}
        </article>
        <h3>Carrito</h3>
        <article className="box">
          <button onClick={clearCart}>Limpiar Carrito</button>
          {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
          ))}
        </article>
      </div>
    );
  };

export default Cart;
