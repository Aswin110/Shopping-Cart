import NavBar from "../components/navBar/NavBar.jsx";
import './cart.css'
import { removeFromCart, increment, decrement } from './cartSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartPage () {
    const notify = () => toast("Order placed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    let cart = useSelector((state)=> state.cart.value)
    const dispatch = useDispatch()
    function removeItemFromCart (item) {
        dispatch(removeFromCart(item))
    }
    useDispatch
    return (
        <>
            <div className="cart">
                <NavBar/>
                <div className="cartRightSection">
                    {cart.length === 0 ? 
                        <div className="cart-container">Cart is empty</div> : 
                        cart.map((item) => 
                        <div key={item.id} className='cart-card'>
                            <img className="productImage" src={item.image} alt="" />
                            <div >{item.title}</div>
                            <div className='category'>{item.category}</div>
                            <div>${item.price}</div>
                            <button className="button" onClick={()=> removeItemFromCart(item)}>Remove</button> 
                            <span className="sign-container"><FontAwesomeIcon onClick={()=>dispatch(increment(item))} className="sign" icon={faPlus} />  {item.quantity}  <FontAwesomeIcon className="sign" onClick={()=>dispatch(decrement(item))} icon={faMinus} /></span>
                            <div><button onClick={notify} className="button">Buy</button></div>
                        </div>)}
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default CartPage;