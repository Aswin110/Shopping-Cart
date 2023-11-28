import NavBar from "../components/navBar/NavBar.jsx";
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'

function CartPage () {
    let cart = useSelector((state)=> state.cart.value)

    return (
        <>
            <div className="cart">
                <NavBar/>
                <div className="cartRightSection">
                    {cart.length === 0 ? <div>Cart is empty</div> : cart.map((item) => 
                        <div key={item.id}>{item.title}</div>)}
                </div>
            </div>
        </>
    )
}

export default CartPage;