"use client"

import React, {useRef} from "react"
import Link from "next/link"
import { redirect } from "next/navigation"

import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import { Toast } from "react-hot-toast"

import { useStateContext } from "./context/stateContext"






export default function Cart() {
  const cartRef = useRef()
  const {totalQuantity, cart, setShowCart, qty, onRemove} = useStateContext()
  console.log(cart)
  console.log(cart.length)
  console.log(totalQuantity)
  console.log(qty)
  

  
    function checkout() {
    
    const body = JSON.stringify(cart)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    }

    fetch('/api/stripe/createCheckoutSession', options)
    .then(res => res.json()).then(({ url }) => {
      window.location = url 
    })
  }



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
                <div className="flex bottom-2 flex-col">
                  <h3>Quantity: {item.quantity}</h3>
                  <h3>Size: {item.size}</h3>
                  <h3>Price: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(item.priceCalc * item.quantity)}</h3>
                  <button type="button" className="text-red-500" onClick={() => onRemove(item)}>Remove Item</button>
                </div>
                </div>
            </div>
          ))}
            
            <div className="cart-bottom">
              <div className="flex justify-center items-center">
                  
                    <button type="submit" onClick={() => checkout()} className="btn w-[60%]">Checkout</button>
                  
              </div>

            </div>

        </div>
      </div>
    </div>

  )
}