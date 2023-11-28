import NavBar from "../components/navBar/NavBar.jsx";
import Carousel from "../components/carousel/carousel.jsx";
import Category from "../components/category/category.jsx";
import { Link } from "react-router-dom";
import './HomePage.css'

function HomePage () {
    return (
        <>
            <div className="Home">
                <NavBar/>
                <div className="HomeRightSection">
                    <Carousel/>
                    <pre className = "speed">
                        {'SPEED BEYOND YOUR \nWILDEST DREAMS'}
                    </pre>
                    <p >Make it real with Mercurial Dream 7</p>
                    <Category/>
                    
                    <pre className = "speed">
                        <h1 className="jordan">Jordan</h1>
                        FLIGHT ESSENTIALS
                    </pre>
                    <p className="level">Level up your fits with pieces rooted in Jordan heritage. From everyday fleece essentials in subtle washed colors to classic outerwear silhouettes and utilitarian pants, these staples are timelessly cool.</p>
                    <Link to='/shop'><button className="shopButton" >shop</button></Link>
                </div>
            </div>
        </>
    )
}
export default HomePage;