import React, {useContext, useEffect, useState} from "react"
import "../Styles/littleShoppingCart.css"
import {ItemChangeContext} from "./ItemChangeContext"


const LittleShoppingCart = ()=>
{
    const [items, setItems] = useState([])
    const { itemChangeContext } = useContext(ItemChangeContext)

    useEffect(() => {
        const localStorageKeys = Object.keys(localStorage);
        const localStorageItems = localStorageKeys.map(key => {
            return JSON.parse(localStorage.getItem(key))
        })
        setItems(localStorageItems)
    }, [itemChangeContext])

    return (
        <div>
            {itemChangeContext ? (
                <div className="little">
                    <div className="container-sm">
                        {items.map(item => (
                            <div className="row" key={item.id}>
                                <div className="item borde-rojo translucent">
                                    <h5>{item.nombre}</h5>
                                    <img src={`/resources/${item.nombre}.jpg`} className="card-img-little" />
                                    <p>Cantidad: {item.cantidad}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}


export default LittleShoppingCart