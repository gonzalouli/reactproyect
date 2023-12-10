import React from 'react';

import ImageSlide from '../Components/ImageSlide'
import {Link} from "react-router-dom";
function Home() {
    return (
        <div>
            <div className="container">
                <h1>Bienvenido a MyFishingSpot</h1>
                <p>Explora nuestra amplia selección de equipos de pesca para tu próxima aventura.</p>
                <ImageSlide />
            </div>
        </div>
    );
}

export default Home
