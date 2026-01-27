import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-extrabold font-mono text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">
        Pagina pe care o cauți nu a fost găsită.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold font-mono bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-sm"
      >
        Înapoi la pagina principală
      </Link>
    </div>
  );
}
