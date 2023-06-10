"use client"
import React, { createContext, useContext, useState, useEffect} from "react";
import { toast } from 'react-hot-toast'

const Context = createContext({});

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart.length)
    console.log(totalQuantity)
    console.log(cart)

    const onAdd = (product, quantity) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist) {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x,
                    
                )
            );
            
        } else {
            setCart([...cart, { ...product, qty: quantity }]);
            setQty(product.quantity)
            
        }
        setTotalQuantity(cart.length)
    }

    

    const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty >= 1) {
            setCart(cart.filter((x) => x.id !== product.id));
            setQty(qty - product.quantity)

        } else {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x,
                    setQty(qty - product.quantity)
                )
            );
        }
    }



    

    return(
        <Context.Provider 
            value={{
                showCart,
                setShowCart,
                cart,
                onAdd,
                onRemove,
                qty,
                totalQuantity,
                
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);