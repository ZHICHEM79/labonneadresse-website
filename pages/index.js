import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home(){
  return (
    <>
      <Header />
      <main>
        <section className="bg-cover bg-center text-white py-20" style={{backgroundImage:"url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')"}}>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold">LA BONNE ADRESSE — Des vacances qui vous ressemblent</h1>
              <p className="mt-4 max-w-xl text-white/90">Agence de voyages à Ouled Fayet, Alger, spécialisée dans les séjours sur mesure, les escapades de rêve et les destinations internationales.</p>
              <div className="mt-6 flex gap-3">
                <Link href="/contact"><a className="bg-white text-primary px-5 py-3 rounded-md font-bold">Demander un devis</a></Link>
                <Link href="/offers"><a className="border border-white px-5 py-3 rounded-md">Voir nos offres</a></Link>
              </div>
            </div>

            <div className="bg-white/20 p-6 rounded-xl backdrop-blur">
              <h3 className="font-bold text-lg">Nos avantages</h3>
              <ul className="mt-4 space-y-2">
                <li>✓ Offres adaptées à votre budget</li>
                <li>✓ Conseils d’experts</li>
                <li>✓ Accompagnement avant, pendant et après le voyage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Destinations populaires</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {['Alger','Dubaï','Istanbul','Rome'].map((c)=> (
                <div key={c} className="border rounded-lg overflow-hidden">
                  <img src={`https://source.unsplash.com/featured/?${encodeURIComponent(c)}`} alt={c} className="h-44 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{c}</h3>
                    <p className="text-sm text-gray-600 mt-2">Description courte pour {c}.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Offres du moment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Voyages sur mesure</h3>
                <p>Itinéraires personnalisés selon vos envies, votre budget et votre rythme.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Séjours familiaux</h3>
                <p>Des vacances confortables, bien organisées et adaptées à toute la famille.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Circuits culturels</h3>
                <p>Découvrez les villes historiques, le patrimoine et les traditions locales.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ils nous ont fait confiance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                <p>“Très professionnel, très clair et très à l’écoute.”</p>
                <div className="mt-4 font-semibold">Amina B.</div>
              </div>
              <div className="border rounded-lg p-6">
                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                <p>“Le voyage a été impeccablement organisé.”</p>
                <div className="mt-4 font-semibold">Yacine D.</div>
              </div>
              <div className="border rounded-lg p-6">
                <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                <p>“Nous avons adoré notre séjour en famille.”</p>
                <div className="mt-4 font-semibold">Leila M.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-14">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">Votre prochain voyage commence ici</h2>
              <p className="mt-3 text-white/80">Demandez votre devis en quelques clics et obtenez une réponse rapide de notre équipe.</p>
            </div>
            <div className="bg-white text-gray-800 rounded-xl p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input className="border p-3 rounded" placeholder="Nom" />
                  <input className="border p-3 rounded" placeholder="Email" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input className="border p-3 rounded" placeholder="Téléphone" />
                  <input className="border p-3 rounded" placeholder="Destination" />
                </div>
                <textarea className="w-full border p-3 rounded" rows="4" placeholder="Votre message"></textarea>
                <button className="bg-accent text-white w-full py-3 rounded font-bold">Envoyer ma demande</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
