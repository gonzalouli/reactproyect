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
import Opinion from "../Pages/Opinion";
import DefaultPage from "../Pages/DefaultPage";

const Router = ()=>
{
    return(
    <Fragment>
        <Header />
        <BrowserRouter>
            <div>
                <Routes>
                    <Route  path="/" element={<Home/>}></Route>
                    <Route  path="/lures" element={<Lures/>}></Route>
                    <Route  path="/rods" element={<Rods/>}></Route>
                    <Route  path="/reels" element={<Reels/>}></Route>
                    <Route  path="/opinions" element={<Opinion/>}></Route>
                    <Route  path="/shoppingcart" element={<ShoppingCart/>}></Route>
                    <Route  path="*" element={<DefaultPage/>}></Route>

                </Routes>
            </div>
        </BrowserRouter>
        <LittleShoppingCart />
        <Footer />
    </Fragment>
    )
}

export default Router