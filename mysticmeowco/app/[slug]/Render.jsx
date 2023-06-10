"use client"
import Navbar from "../navbar"
import React, { useState } from "react"
import { useStateContext } from "../context/stateContext"

export default function Render(product) {


    console.log(product.product)

    const [selected, setSelected] = useState(0)
    const { incQty, decQty, qty, onAdd } = useStateContext()
    console.log(selected)


    function handleChange(e) {
        var num = e.target.value.match(/\d+/g);
        setSelected(parseInt(num))
        console.log(num)
    }


    function handleForm(e) {
        e.preventDefault()
        console.log(e.target.quantity.value)
        
        var letr =  e.target.select.value.match(/[a-zA-Z]+/g);
        console.log(letr)

        onAdd(product.product, e.target.quantity.value)



    }

    return (
        <>

            <Navbar />

            <div>
                <div className="product-detail-container">
                    <div>
                        <div className="image-container">
                            <img src={product.product.image_url} height={500} width={500} className="product-image"/>
                        </div>
                    </div>
                    <div className="product-details-desc">
                        <h1 className=" font-extrabold text-3xl ">{product.product.name}</h1>
                        <h4 className="pt-2 text-2xl">Details:</h4>
                        <p className="w-[70%]">{product.product.description}</p>
                        
                        <form className="flex flex-col" onSubmit={(e)=> handleForm(e)}>
                            <label className="text-2xl pt-2">Select Size</label>
                            <select id="select"  className="w-[20%] mt-2 outline" onChange={(e)=> handleChange(e)}>
                                {product.product.sample_quantity > 0 ? <option  value={product.product.sample_quantity + 'Sample'}>Sample</option> : null}
                                {product.product.regular_quantity > 0 ? <option value={product.product.regular_quantity  + 'Regular'}>Regular</option> : null}
                                {product.product.exclusive_quantity > 0 ? <option value="exclusive">Exclusive</option> : null}
                                {product.product.wheel_quantity > 0 ? <option value="wheel">Wheel</option> : null}
                                {product.product.small_cereal_quantity > 0 ? <option value="small_cereal">Small Cereal</option> : null}
                                {product.product.large_cereal_quantity > 0 ? <option value="large_cereal">Large Cereal</option> : null}
                                {product.product.bag_dicks_quantity > 0 ? <option value="bag_dicks">Bag of Dicks</option> : null}
                            </select>
                                

                            <label className="text-2xl pt-2">Quantity: Max Quantity {selected-2 <= 0 ? 0 : selected -2}</label>
                            <input type="number" id="quantity" className="w-[20%] mt-2 outline" placeholder="Quantity" max={selected -2 } defaultValue={0} />

                            <div className="buttons">
                                <button type="submit" className="add-to-cart">Add to Cart</button>
                            </div>


                        </form>
                    </div>
    
                </div>
            </div>

        </>
    )
    }