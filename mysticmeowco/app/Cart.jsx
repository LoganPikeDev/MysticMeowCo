"use client"

import React, {useRef} from "react"
import Link from "next/link"

import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import { Toast } from "react-hot-toast"

import { useStateContext } from "./context/stateContext"


export default function Cart() {
  const cartRef = useRef()
  const {totalPrice, totalQuantity, cart, setShowCart, qty} = useStateContext()
  console.log(cart)
  console.log(cart.length)
  console.log(totalQuantity)
  console.log(qty)

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={()=>setShowCart(false)}><AiOutlineLeft /><span className="heading">Your Cart</span> <span className="cart-num-items">{totalQuantity} : items</span></button>
        {cart.length < 1 &&
          <div className="empty-cart">
            <h3>Your shopping cart is empty</h3>
            <button href="/" className="btn" onClick={() => setShowCart(false)}>Continue Shopping</button>
            
          </div>
        }
        <div className="product-container">
          {cart.length > 0 && cart.map((item, index) => (

            <div className="product" key={item.id}>
              <img src={item.image_url} className="cart-product-image" alt={item.name} />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                </div>
                <div className="flex bottom">
                  <h3>Quantity: {qty}</h3>
                </div>
                </div>
            </div>
          ))}
              

        </div>
      </div>
    </div>

  )
}