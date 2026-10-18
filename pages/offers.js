import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Offers(){
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Offres</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded">
            <h3 className="font-bold mb-2">Voyages sur mesure</h3>
            <p>Des aventures personnalisées selon vos envies.</p>
          </div>
          <div className="border p-6 rounded">
            <h3 className="font-bold mb-2">Séjours familiaux</h3>
            <p>Des vacances confortables et bien organisées.</p>
          </div>
          <div className="border p-6 rounded">
            <h3 className="font-bold mb-2">Circuits culturels</h3>
            <p>Des itinéraires riches et immersifs.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
