import Stripe from 'stripe';
import { buffer } from 'micro'
import { PrismaClient } from '@prisma/client';

export const config = {
  api: {
    bodyParser: false,
  }
}



export default async function webhookHandler(req:any, res:any) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2022-11-15"
    })
  
    const client = new PrismaClient()
    
  
    if (req.method === 'POST'){
      const buf = await buffer(req)
      const sig = req.headers['stripe-signature']
      const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET
  
      let event: Stripe.Event;
  
      try {
        if (!sig || !webhookSecret) return;
  
        event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  
      } catch(error:any) {
        console.log(`Webhook Error: ${error.message}`)
        return res.status(400).send(`Webhook Error: ${error.message}`)
      }
  
      if (event.type === "checkout.session.completed"){
        


      }
      res.status(200).send();
    }
}