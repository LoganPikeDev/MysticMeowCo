"use client"
import React, { createContext, useContext, useState, useEffect} from "react";
import { toast } from 'react-hot-toast'
import { PrismaClient } from "@prisma/client";

const Context = createContext({});

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const client = new PrismaClient()

    const onAdd = (product, quantity, letr) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist) {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x,
                    setQty(qty + quantity)
                )
            );
        } else {
            setCart([...cart, { ...product, qty: quantity }]);
            setTotalQuantity(totalQuantity + 1);
        }
    }

    

    const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty >= 1) {
            setCart(cart.filter((x) => x.id !== product.id));
        } else {
            setCart(
                cart.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x,
                    setQty(qty - 1)
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
                
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);