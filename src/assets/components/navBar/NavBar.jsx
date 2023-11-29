import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShop, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import nikeLogo from "../../../../public/images/nike-4-logo-svgrepo-com.svg"
import './NavBar.css'

function NavBar () {
    return (
        <>
            <div className="navBar">
                <div>
                    <div className="logo">
                        <div className="logoName">Nike</div>
                        <Link to="/"><img className="nikeLogo" src={nikeLogo} alt="" /></Link>
                    </div>
                </div>
                <div className="content">
                    <NavLink className="container" to="/">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Home</span>
                    </NavLink>
                    <NavLink className="container" to='/shop'>
                        <FontAwesomeIcon icon={faShop} />
                        <span>Shop</span>
                    </NavLink>
                    <NavLink className="container" to = '/cart'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>Cart</span>
                    </NavLink>
                </div>
                <div className="footer">
                    <Link className="footerContainer" to = '/' >Help</Link>
                    <Link className="footerContainer" to = '/' >Contact</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;