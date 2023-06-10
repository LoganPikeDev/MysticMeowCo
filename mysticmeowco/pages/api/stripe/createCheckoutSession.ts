
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useStateContext } from "@/app/context/stateContext";

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    

    const data = req.body;
    //console.log(data)


    const format = data.map((item:any) => (
     {price: item.price, quantity: item.quantity}
    ))

    console.log(format)


      try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: format,
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}`,
        shipping_address_collection: { allowed_countries: ['US'] },
        automatic_tax: { enabled: true },
        allow_promotion_codes: true,
        phone_number_collection: { enabled: true },
        shipping_options: [
          {
              shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                      amount: 700,
                      currency: 'usd'
                  },
                  display_name: 'Stnadard Shipping',
                  tax_behavior: 'exclusive'

              }
          }
        ]
      })
      res.json({ url: session.url })
      console.log(session.url)
    } catch (err:any) {
      res.status(err.statusCode || 500).json(err.message)
  } 
}
    