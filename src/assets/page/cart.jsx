import NavBar from "../components/navBar/NavBar.jsx";
import './cart.css'

function CartPage () {
    return (
        <>
            <div className="cart">
                <NavBar/>
                <div className="cartRightSection">
                    Cart is empty
                </div>
            </div>
        </>
    )
}

export default CartPage;