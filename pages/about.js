import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About(){
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">À propos</h1>
        <p className="text-gray-700">LA BONNE ADRESSE est une agence de voyages basée à Ouled Fayet, en Algérie. Nous concevons des séjours sur mesure, des circuits culturels et des escapades internationales avec un service fiable et personnalisé.</p>
      </main>
      <Footer />
    </>
  );
}
