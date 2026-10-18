export default function Footer(){
  return (
    <footer className="footer">
      <div className="container grid md:grid-cols-4 gap-8">
        <div>
          <img src="/logo.svg" alt="logo" style={{height:40}} />
          <p className="mt-4 text-sm">Agence de voyages à Ouled Fayet — voyages sur mesure et conseils personnalisés.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Liens</h4>
          <ul className="space-y-2 text-sm">
            <li>Accueil</li>
            <li>Destinations</li>
            <li>Offres</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-sm">Ouled Fayet, Alger<br/>+213 XX XXX XXXX<br/>contact@labonneadresse.shop</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Réseaux</h4>
          <p className="text-sm">Instagram • Facebook • LinkedIn</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">© 2026 LA BONNE ADRESSE — Tous droits réservés</div>
    </footer>
  );
}
