import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact(){
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <form className="max-w-xl space-y-4">
          <input className="w-full border p-3 rounded" placeholder="Nom" />
          <input className="w-full border p-3 rounded" placeholder="Email" />
          <input className="w-full border p-3 rounded" placeholder="Téléphone" />
          <textarea className="w-full border p-3 rounded" rows="5" placeholder="Votre message"></textarea>
          <button className="bg-primary text-white px-6 py-3 rounded font-bold">Envoyer</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
