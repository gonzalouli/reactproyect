import {Fragment} from 'react'
import {BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter} from 'react-router-dom'

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LittleShoppingCart from "../Components/LittleShoppingCart";
import DefaultPage from "../Pages/DefaultPage";
import ShoppingCart from "../Pages/ShoppingCart";
import Opinion from "../Pages/Opinion";
import Reels from "../Pages/Reels";
import Rods from "../Pages/Rods";
import Lures from "../Pages/Rods";
import Home from "../Pages/Home";




const myRoutes = createBrowserRouter( [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/lures",
        element: <Lures />,
    },
    {
        path: "/rods",
        element: <Rods />,
    },
    {
        path: "/reels",
        element: <Reels/>,
    },
    {
        path: "/opinions",
        element: <Opinion />,
    },
    {
        path: "/shoppingcart",
        element: <ShoppingCart/>,
    },
    {
        path: "*",
        element: <DefaultPage/>,
    }
]);

const Router = ()=>
{
    return(
        <Fragment>
            <Header />
                <RouterProvider router={myRoutes} />
            <LittleShoppingCart />
            <Footer />
        </Fragment>
    )
}

export default Router