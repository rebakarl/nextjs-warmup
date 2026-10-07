import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ maxWidth: '650px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Minust (/about)</h1>
      <p>
        Tere! Mina olen Karl. Õpin praegu veebiarendust ning see leht on minu esimene tutvus Next.js ja selle App Router süsteemiga.
      </p>

      <nav style={{ marginTop: '1.5rem' }}>
        <Link
          href="/"
          style={{ color: '#0070f3', textDecoration: 'underline' }}
        >
          ← Tagasi pealehele
        </Link>
      </nav>
    </main>
  );
}
