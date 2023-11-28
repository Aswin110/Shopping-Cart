import NavBar from "../components/navBar/NavBar.jsx";
import { useEffect, useState } from 'react'
import { menCloth, womenCloth } from "../components/fakeclothAPI/cloth.jsx";
import Card from "../components/card/card.jsx";
import { useSelector, useDispatch } from 'react-redux'
import { addTCart } from "./cartSlice.js"
import './shop.css'

function ShopPage () {
    let [men, setMen] = useState([]);
    let [women, setWomen] = useState([]);
    let [loading, setLoading] = useState(true);

    const dispatch = useDispatch()
    function addToCart (item) {
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
                {loading?<div>loading...</div>:<div className="shopRightSection">
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
        </>
    )
}

export default ShopPage;