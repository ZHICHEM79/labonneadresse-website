import Link from 'next/link';
import { useRouter } from 'next/router';

const LOCALES = ['fr','ar','en'];

export default function Header(){
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const switchLocale = (l) => router.push({ pathname, query }, asPath, { locale: l });

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="flex items-center gap-4">
            <img src="/logo.svg" alt="LA BONNE ADRESSE" style={{height:48}} />
          </a>
        </Link>

        <nav className="hidden md:flex gap-6 font-semibold text-sm">
          <Link href="/">Accueil</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/offers">Offres</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">À propos</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border rounded-full px-2 py-1">
            {LOCALES.map(l => (
              <button key={l} onClick={() => switchLocale(l)} className={`px-2 py-1 rounded-full text-xs ${locale===l? 'bg-black text-white': 'text-black'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
          <a href="/contact" className="header-cta">Demander un devis</a>
        </div>
      </div>
    </header>
  );
}
