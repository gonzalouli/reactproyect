import {useContext, useEffect, useState} from "react";
import {ItemChangeContext} from "../Components/ItemChangeContext";
import reelsDB from "../database/reelsDB";
import rodsDB from "../database/rodsDB";
import luresDB from "../database/luresDB";



const useEmptyCart = ( )=>{
    const {itemChange, itemHasChange} = useContext(ItemChangeContext)
    const [allProducts, setAllProducts] = useState([...reelsDB, ...rodsDB, ...luresDB])

    useEffect(() => {
        setAllProducts(allProducts.slice().sort((a, b) => a.id - b.id))
    }, []);

    const emptyCart = ()=>{
        localStorage.clear()
        itemHasChange()
    }

    const addItemCart = (selectedId)=>{
        if(allProducts.at(selectedId))
            if(localStorage.getItem(selectedId)){
                let selectedItem = JSON.parse(localStorage.getItem(selectedId))
                console.log(selectedItem)
                selectedItem.cantidad = selectedItem.cantidad+1
                localStorage.setItem(selectedId, JSON.stringify(selectedItem))
            }
            else {
                let newproduct = allProducts.find(object => object.id === selectedId)
                localStorage.setItem(selectedId, JSON.stringify({...newproduct, "cantidad": 1}))
            }

    }

    const removeItemFromCart = (key) => {
        if (localStorage.getItem(key)) {
            let edittedItem =  JSON.parse(localStorage.getItem(key))
            edittedItem.cantidad = edittedItem.cantidad - 1
            if (edittedItem.cantidad === 0) {
                localStorage.removeItem(key)
            } else {
                localStorage.setItem(key, JSON.stringify(edittedItem))
            }
        }
        itemHasChange()
    };


    return {emptyCart,addItemCart, removeItemFromCart}

}



export default useEmptyCart