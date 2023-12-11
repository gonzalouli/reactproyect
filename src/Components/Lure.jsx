import React, {useContext, useState} from 'react';
import "../Styles/Article.css"
import Popup from "./Popup";
import {ItemChangeContext} from "./ItemChangeContext";
import useCart from "./useCart";
const Lure = ({ id, precio, nombre, tipo, descripcion, coloresDisponibles }) => {
    const [showPopup, setShowPopup] = useState(false);
    const {itemChange, itemHasChange} = useContext(ItemChangeContext)
    const { addItemCart } = useCart()
    const [buttonActive, setButtonActive] = useState(true);


    const addItem = (event)=>
    {
        const selectedId = event.target.dataset.info
        setShowPopup(true)
        setButtonActive(false)

        addItemCart(selectedId)

        itemHasChange()

        setTimeout(() => {
            setShowPopup(false);
            setButtonActive(true)

        }, 3000);
    }

    return (

            <div className="card">
                <img src={`/resources/${nombre}.jpg`} alt="Lure" className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{nombre}</h3>
                    <p className="card-text">Tipo: {tipo}</p>
                    <p className="card-text">Descripción: {descripcion}</p>
                </div>
                <h4 className="card-title">Precio: {precio} €</h4>

                <button disabled={!buttonActive} type="button" className="btn btn-success" data-info={id} onClick={addItem} >Añadir</button>
                {showPopup ? <Popup show={showPopup} message="¡Artículo añadido al carrito!" /> : null}
            </div>


    );
};




export default Lure