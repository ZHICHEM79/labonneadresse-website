export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end();
  const FORMSPREE_URL = process.env.FORMSPREE_URL; // ex: https://formspree.io/f/yourid
  const body = req.body;

  if(!FORMSPREE_URL){
    console.log('Form submission (no FORMSPREE_URL):', body);
    return res.status(200).json({ ok: true, message: 'Received (no external forward configured)' });
  }

  try{
    const r = await fetch(FORMSPREE_URL, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(body) });
    const data = await r.json();
    return res.status(r.status).json(data);
  }catch(e){
    console.error(e);
    return res.status(500).json({ error: 'Failed to forward form' });
  }
}
