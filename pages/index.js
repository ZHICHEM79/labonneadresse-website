import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1>Des voyages conçus pour vivre l'exception</h1>
              <p>LA BONNE ADRESSE conçoit des séjours sur mesure, des escapades premium et des circuits exclusifs — assistance 24/7, conseils d'experts et offres garanties.</p>
              <div style={{display:'flex',gap:12,marginTop:18}}>
                <a href="/contact" className="header-cta">Demander un devis</a>
                <a href="/offers" style={{padding:'12px 18px',borderRadius:10,background:'#fff',color:'#0C2340',fontWeight:700}}>Voir nos offres</a>
              </div>
            </div>
            <div>
              <div className="card">
                <h3 className="font-bold">Nos avantages</h3>
                <ul style={{marginTop:12}}>
                  <li>✔ Partenaires sélectionnés</li>
                  <li>✔ Assistance 24/7</li>
                  <li>✔ Itinéraires sur-mesure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={{padding:'56px 0'}}>
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Destinations phares</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {['Alger','Dubaï','Istanbul','Rome'].map(c=> (
                <div key={c} className="card">
                  <img src={`https://source.unsplash.com/featured/?${encodeURIComponent(c)}`} alt={c} style={{height:160,width:'100%',objectFit:'cover',borderRadius:12}}/>
                  <h3 style={{marginTop:12,fontWeight:700}}>{c}</h3>
                  <p className="text-sm" style={{color:'#6b7280'}}>Découvrez nos offres sur {c}.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
