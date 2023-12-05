import React, {Fragment} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../Pages/Home";
import Lures from "../Pages/Lures";
import Rods from "../Pages/Rods";
import Reels from "../Pages/Reels";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ShoppingCart from "../Pages/ShoppingCart";
import LittleShoppingCart from "../Components/LittleShoppingCart";

const Router = ()=>
{
    return(
    <Fragment>
        <Header />
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/lures" element={<Lures/>}></Route>
                    <Route exact path="/rods" element={<Rods/>}></Route>
                    <Route exact path="/reels" element={<Reels/>}></Route>
                    <Route exact path="/shoppingcart" element={<ShoppingCart/>}></Route>

                </Routes>
            </div>
        </BrowserRouter>
        <LittleShoppingCart />
        <Footer />
    </Fragment>
    )
}

export default Router