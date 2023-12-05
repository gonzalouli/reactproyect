import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "../Styles/ImageSlide.css"





const ImageSlide = ()=>
{
    const numbers = Array.from({ length: 4 }, (_, index) => index + 1);
    return(
        <Carousel>
            {numbers.map( index=>{
                    return(
                        <Carousel.Item interval={3000} key={index} className="imageItem">
                            <img
                                key={index}
                                className="image"
                                src={`/resources/img${index}.jpeg`}
                                alt="Colaborador: Gonzalo Ulibarri"
                            />
                        </Carousel.Item>
                    )
                })
            }
    </Carousel>
    )
}



export default ImageSlide