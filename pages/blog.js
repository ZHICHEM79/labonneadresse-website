import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog(){
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded">
            <h3 className="font-bold">Que visiter à Alger ?</h3>
            <p className="text-sm text-gray-600 mt-2">Guide rapide sur les endroits incontournables...</p>
          </div>
          <div className="border p-6 rounded">
            <h3 className="font-bold">Voyager en famille</h3>
            <p className="text-sm text-gray-600 mt-2">Les meilleurs conseils pour un voyage serein.</p>
          </div>
          <div className="border p-6 rounded">
            <h3 className="font-bold">Top destinations 2026</h3>
            <p className="text-sm text-gray-600 mt-2">Les destinations à considérer pour l’année.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
