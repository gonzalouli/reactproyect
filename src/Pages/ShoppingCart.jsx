import React, {Fragment, useContext, useEffect, useState} from 'react';
import "../Styles/shoppingCart.css"
import {ItemChangeContext} from "../Components/ItemChangeContext";
import useEmptyCart from "../Components/useEmptyCart";

const ShoppingCart = () => {
    const [items, setItems] = useState(Object?.keys(localStorage))
    const [hasChange, setHasChange] = useState(false)
    const {itemChange} = useContext(ItemChangeContext)
    const { emptyCart, removeItemFromCart} = useEmptyCart()

    let unidades = 0
    let montante = 0

    useEffect(() => {

    }, [items, hasChange,itemChange])

    const removeItem = (event) => {
        const key = event.target.dataset.info
        removeItemFromCart(key)
        setHasChange(!hasChange)
        setItems(Object.keys(localStorage))
    };

    return (
        <Fragment>
            <div className="container">
                <h2>Carrito de la Compra</h2>
                <div className="row">
                    <div className="col">
                        {Object.keys(localStorage).length>0 ? items.map(key =>{
                            montante = montante+parseInt(JSON.parse(localStorage.getItem(key)).cantidad)*parseInt(JSON.parse(localStorage.getItem(key)).precio)
                            unidades = unidades+parseInt(JSON.parse(localStorage.getItem(key)).cantidad)
                            return(
                                <div className="row" key={key}>
                                    <div className="item borde-rojo" key={JSON.parse(localStorage.getItem(key)).id}>
                                        <h5>{JSON.parse(localStorage.getItem(key)).nombre}</h5>
                                        <img src={`/resources/${JSON.parse(localStorage.getItem(key)).nombre}.jpg`} className="card-img-little" />
                                        <p>Cantidad: {JSON.parse(localStorage.getItem(key)).cantidad}</p>
                                        <button data-info={key} onClick={removeItem}>Eliminar unidad</button>
                                    </div>
                                </div>
                            )
                        }) : <></>}
                    </div>
                    <div className="col">
                        <h2>Cuenta</h2>
                        <h3>Montante: {montante} €</h3>
                        <h4>Productos: {unidades} unidades</h4>
                        <button type="button" className="btn btn-danger" onClick={emptyCart}>Vaciar cesta</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ShoppingCart;