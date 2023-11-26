import { Link } from "react-router-dom";
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
                    
                </div>
            </div>
        </>
    )
}

export default NavBar;