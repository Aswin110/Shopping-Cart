import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShop, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

function NavBar () {
    return (
        <>
            <div className="navBar">
                <div>
                    <div className="logo">
                        <div className="logoName">Nike</div>
                        <a href="/"><img src="src/assets/images/nike-4-logo-svgrepo-com.svg" alt="" /></a>
                    </div>
                </div>
                <div className="content">
                    <Link className="container" to="/">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Home</span>
                    </Link>
                    <Link className="container" to='/shop'>
                        <FontAwesomeIcon icon={faShop} />
                        <span>Shop</span>
                    </Link>
                    <Link className="container" to = '/cart'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>Cart</span>
                    </Link>
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