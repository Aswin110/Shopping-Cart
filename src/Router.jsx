import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./assets/page/HomePage.jsx";
import CartPage from "./assets/page/cart.jsx";
import ShopPage from "./assets/page/shop.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<HomePage/>,
        },

        {
            path:'cart',
            element:<CartPage/>,
        },

        {
            path:'shop',
            element:<ShopPage/>,
        }
    ])

    return <RouterProvider router={router}/>
}

export default Router;