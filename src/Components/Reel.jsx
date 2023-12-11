import React, { useContext, useState} from 'react';
import "../Styles/Article.css"
import Popup from "./Popup";
import {ItemChangeContext} from "./ItemChangeContext";
import useCart from "./useCart";
const Reel = ({ id, nombre,precio,tamanio,capacidad,peso }) => {

    const [showPopup, setShowPopup] = useState(false);
    const {itemChange, itemHasChange} = useContext(ItemChangeContext)
    const { addItemCart } = useCart()

    const [buttonActive, setButtonActive] = useState(true);

    const addItem = (event)=>
    {
        setButtonActive(false)
        const selectedId = event.target.dataset.info
        setShowPopup(true)

        addItemCart(selectedId)

        itemHasChange()

        setTimeout(() => {
            setShowPopup(false);
            setButtonActive(true)

        }, 3000);
    }

    return (

        <div className="card">
            <img src={`/resources/${nombre}.jpg`} alt="reel" className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <div className="list-container centered-list">
                    <ul>
                        <h4>Tamaño {tamanio}</h4>
                        <li>Capadidad: {capacidad} m.</li>
                        <li>Peso: {peso} gr</li>
                    </ul>
                </div>
            </div>
            <h4 className="card-title">Precio: {precio} €</h4>
            <button disabled={!buttonActive} type="button" className="btn btn-success" data-info={id} onClick={addItem} >Añadir</button>
            {showPopup ? <Popup show={showPopup} message="¡Artículo añadido al carrito!" /> : null}
        </div>

    );
};




export default Reel