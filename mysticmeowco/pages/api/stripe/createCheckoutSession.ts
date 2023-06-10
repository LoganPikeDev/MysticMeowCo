
import { PrismaClient } from "@prisma/client";


export default async function handler(req:any, res:any){

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const client = new PrismaClient();

    const getProducts = await client.product.findMany()

    if (req.method === 'POST') {
        try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
             price: getProducts[0].regular_price,
             quantity: 3
            },
            {
                price: getProducts[1].regular_price,
                quantity: 1
            },
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
          shipping_address_collection: { allowed_countries: ['US'] },
          automatic_tax: { enabled: true },
          
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
        res.redirect(303, session.url)
      } catch(err:any) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}