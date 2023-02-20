import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = req.body.priceId

  if (req.method !== 'POST') {
    return res.status(405)
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Page not found' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })

  res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}