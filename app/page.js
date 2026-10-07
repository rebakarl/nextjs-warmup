import Link from 'next/link';
import Counter from './components/Counter';
import MessageLoader from './components/MessageLoader';

export default function Home() {
  return (
    <main style={{ maxWidth: '650px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Tere tulemast Next.js Warm-up lehele!</h1>
      <p>See on pealeht (Server Component), mis demonstreerib Next.js App Routerit.</p>

      <nav style={{ margin: '1rem 0' }}>
        <Link
          href="/about"
          style={{ color: '#0070f3', textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Mine lehele: Minust (/about) →
        </Link>
      </nav>

      <Counter />
      <MessageLoader />
    </main>
  );
}
