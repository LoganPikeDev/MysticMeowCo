"use client"
import Navbar from "../navbar"
import React, { useState } from "react"
import { useStateContext } from "../context/stateContext"

export default function Render(product) {


    const [selected, setSelected] = useState(0)
    const [priceShow, setPriceShow] = useState('')
    const { incQty, decQty, qty, onAdd } = useStateContext()
    console.log(selected)


    function handleChange(e) {
        console.log(e.target.value)
        switch (e.target.value) {
            case 'Sample':
                setSelected(product.product.Sample.sample_inventory)
                setPriceShow('2.50')
                break;
            case 'Regular':
                setSelected(product.product.Regular.regular_inventory)
                setPriceShow('4.50')
                break;
            case 'Exclusive':
                setSelected(product.product.Exclusive.exclusive_inventory)
                setPriceShow('5.00')
                break;
            case 'Large':
                setSelected(product.product.Large.large_inventory)
                console.log(product.product.Large.large_inventory)
                console.log(selected)
                setPriceShow('6.00')
                break;
            case 'Wheel':
                setSelected(product.product.Wheel.wheel_inventory)
                setPriceShow('7.00')
                break;
            case 'small_cereal':
                setSelected(product.product.Small_Cereal_Bag.small_cereal_bag_quantity)
                setPriceShow('3.00')
                break;
            case 'large_cereal':
                setSelected(product.product.Large_Cereal_bag.large_cereal_bag_quantity)
                setPriceShow('6.50')
                break;
            case 'bag_dicks':
                setSelected(product.product.bag_dicks.bag_dicks_quantity)
                setPriceShow('5.00')
                break;
            case '0':
                setSelected(0)
                setPriceShow('')
        }
        
    }


    function handleForm(e) {
        e.preventDefault()
        console.log(e.target.quantity.value)
        console.log(parseInt(e.target.quantity.value))

        let price = ''

        switch (e.target.select.value) {
            case 'Sample':
                price = product.product.Sample.sample_price
                break;
            case 'Regular':
                price = product.product.Regular.regular_price
                break;
            case 'Large':
                price = product.product.Large.large_price
                break;
            case 'Exclusive':
                price = product.product.Exclusive.exclusive_price
                break;
            case 'Wheel':
                price = product.product.Wheel.wheel_price
                break;
            case 'small_cereal':
                price = product.product.Small_Cereal_Bag.small_cereal_bag_price
                break;
            case 'large_cereal':
                price = product.product.Large_Cereal_bag.large_cereal_bag_price
                break;
            case 'bag_dicks':
                price = product.product.bag_dicks.bag_dicks_price
                break;
            case '0':
                return null
        }


        const new_product = new Object({
            id: e.target.select.value + product.product.name,
            name: product.product.name,
            description: product.product.description,
            image_url: product.product.image_url,
            slug: product.product.slug,
            price: price,
            priceCalc : parseFloat(priceShow),
            size: e.target.select.value,
            quantity: parseInt(e.target.quantity.value),
        })

        console.log(new_product)

         onAdd(new_product, parseInt(e.target.quantity.value))



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
                                <option value="0">Select Size</option>
                                {product.product.Sample.sample_inventory> 0  ? <option key={'Sample'}  value={'Sample'}>Sample</option> : null}
                                {product.product.Regular.regular_inventory > 0 ? <option key={'Regular'} value={'Regular'}>Regular</option> : null}
                                {product.product.Large.large_inventory > 0 ? <option value={"Large"}>Large</option> : null}
                                {product.product.Exclusive.exclusive_inventory > 0 ? <option value={"Exclusive"}>Exclusive</option> : null}
                                {product.product.Wheel.wheel_inventory > 0 ? <option value={"Wheel"}>Wheel</option> : null}
                                {product.product.Small_Cereal_Bag.small_cereal_bag_quantity > 0 ? <option value={"small_cereal"}>Small Cereal</option> : null}
                                {product.product.Large_Cereal_Bag.large_cereal_bag_quantity > 0 ? <option value={"large_cereal"}>Large Cereal</option> : null}
                                {product.product.bag_dicks.bag_dicks_quantity > 0 ? <option value={"bag_dicks"}>Bag of Dicks</option> : null}
                            </select>
                                

                            <label className="text-2xl pt-2">Quantity: Max Quantity {selected}</label>
                            <input type="number" id="quantity" className="w-[20%] mt-2 outline" placeholder="Quantity" max={selected} defaultValue={0} min={0}/>

                            <label className="text-2xl pt-2">Price: ${priceShow}</label>
                              
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