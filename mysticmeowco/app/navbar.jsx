"use client"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"
import Cart from "./cart"
import { useState } from "react"
import { useStateContext } from "./context/stateContext"
  
export default function Navbar() {
    const {showCart, setShowCart, totalQuantity, cart} = useStateContext()
    return(
    <div className="navbar-container pt-5">
        <div className="logo">
            <Link href="/">Mystic Meow & Co</Link>
        </div>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}> 
            
            <AiOutlineShopping />
            <span className="cart-quantity">{cart.length}</span>
        </button>
        

        {showCart && <Cart />}
    </div>
    )
}  