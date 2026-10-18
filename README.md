# LA BONNE ADRESSE — Premium

Ce dépôt contient la version premium du site LA BONNE ADRESSE.

ENVIRONMENT VARIABLES (Vercel / local .env):
- FORMSPREE_URL : (optionnel) url Formspree endpoint, ex: https://formspree.io/f/xxxx
- STRIPE_SECRET_KEY : (optionnel) clé secrète Stripe
- NEXT_PUBLIC_BASE_URL : base URL publique (ex: https://labonneadresse.shop)

INSTALL (local):
1. npm install
2. npm run dev

DEPLOY (Vercel):
1. Importer le repo sur Vercel
2. Dans Vercel > Settings > Environment Variables, ajouter FORMSPREE_URL et STRIPE_SECRET_KEY si utilisés
3. Déployer
4. Connecter domaine labonneadresse.shop (Vercel -> Domains)

DNS (Spaceship):
- A record @ -> 76.76.21.21
- CNAME www -> cname.vercel-dns.com

STRIPE:
- La route /api/stripe-session crée une session Checkout si STRIPE_SECRET_KEY est configurée.
- Dans le frontend vous devez appeler cette API pour lancer le paiement.

Formulaire de contact:
- Appel POST -> /api/contact (payload JSON)
- Si FORMSPREE_URL est configuré, la route forwarde vers Formspree.
