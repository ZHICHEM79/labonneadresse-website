import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Destinations(){
  const items = ['Alger','Dubaï','Istanbul','Rome','Marrakech','Antalya'];
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Destinations</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(d => (
            <div key={d} className="border rounded-lg p-4">
              <h3 className="font-bold">{d}</h3>
              <p className="text-sm text-gray-600 mt-2">Une destination idéale pour un séjour agréable et bien organisé.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
