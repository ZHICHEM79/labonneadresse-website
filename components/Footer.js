export default function Footer(){
  return (
    <footer className="bg-[#081d34] text-white mt-16">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-3">LA BONNE ADRESSE</h4>
          <p className="text-sm opacity-90">Agence de voyages basée à Ouled Fayet, Alger.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Liens</h5>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Accueil</li>
            <li>Destinations</li>
            <li>Offres</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Ouled Fayet, Alger</li>
            <li>+213 XX XXX XXXX</li>
            <li>contact@labonneadresse.shop</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Réseaux</h5>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-sm opacity-80">© 2026 LA BONNE ADRESSE — Tous droits réservés</div>
    </footer>
  );
}
