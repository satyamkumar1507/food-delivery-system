import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

    return(
        <div className="w-[900px] flex flex-col mx-auto shadow-2xl p-4 m-5">
           <h1 className="font-bold text-center">Cart</h1>
           <div className="">
            <button
            className="p-2 m-2 bg-blue-600 text-white flex mx-auto cursor-pointer rounded-2xl"
            onClick= {() => {
                handleClearCart();
            }}
            >
            Clear Cart
            </button>
            {
                cartItems.length == 0 && <h1 className="font-bold p-2 text-center">Cart is Empty Add items to the cart</h1>
            }
            <ItemList items={cartItems} />
           </div>
        </div>
    )
}

export default Cart;