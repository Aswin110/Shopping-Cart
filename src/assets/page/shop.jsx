import NavBar from "../components/navBar/NavBar.jsx";
import { useEffect, useState } from 'react'
import { menCloth, womenCloth } from "../components/fakeclothAPI/cloth.jsx";
import Card from "../components/card/card.jsx";
import { useSelector, useDispatch } from 'react-redux'
import { addTCart } from "./cartSlice.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './shop.css'

function ShopPage () {
    let [men, setMen] = useState([]);
    let [women, setWomen] = useState([]);
    let [loading, setLoading] = useState(true);

    const notify = () => toast("Added to Cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const dispatch = useDispatch()
    function addToCart (item) {
        notify()
        dispatch(addTCart(item))
    }

    let cart = useSelector((state)=> state.cart.value)
    console.log('item added to cart',cart)

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const menData = await menCloth()
                const womenData = await womenCloth()

                setMen(menData);
                setWomen(womenData);
                setLoading(false)
            }
            catch(err) {
                console.log(err)
            }
        
        }
        fetchData()
    },[])

    return (
        <>
            <div className="shop">
                <NavBar/>
                {loading ? (
                    <div className="loading-container">
                    Loading...
                    </div>)
                    :<div className="shopRightSection">
                    {men.map((man) => {
                        return(
                            <Card 
                                key = {man.id}
                                image ={man.image}
                                title = {man.title}
                                category = {man.category}
                                price = {man.price}
                                addToCart={()=>addToCart(man)}
                            />
                        )
                    })}

                    {women.map((woman) => {
                        return(
                            <Card 
                            key = {woman.id}
                            image ={woman.image}
                            title = {woman.title}
                            category = {woman.category}
                            price = {woman.price}
                            addToCart={()=>addToCart(woman)}
                            />
                        )
                    })}
                </div>}
            </div>
            <ToastContainer/>
        </>
    )
}

export default ShopPage;