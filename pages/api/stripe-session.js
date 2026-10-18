import Stripe from 'stripe';
export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { price, quantity=1 } = req.body;
  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: price, quantity }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://labonneadresse.vercel.app'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://labonneadresse.vercel.app'}/cancel`,
    });
    return res.status(200).json({ url: session.url });
  }catch(e){
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
}
