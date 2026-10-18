import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary text-white rounded-lg flex items-center justify-center font-bold">L</div>
            <span className="font-bold text-primary">LA BONNE ADRESSE</span>
          </a>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-semibold text-primary">
          <Link href="/">Accueil</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/offers">Offres</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">À propos</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="border border-primary rounded px-2 py-1 text-xs text-primary">FR</button>
          <Link href="/contact">
            <a className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold">Demander un devis</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
