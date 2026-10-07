'use client';

import { useState } from 'react';

export default function MessageLoader() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLoadMessage() {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/message');
      if (!res.ok) {
        throw new Error(`Päring ebaõnnestus staatusega ${res.status}`);
      }
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || 'Midagi läks valesti');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ margin: '1.5rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Serveri sõnumi laadimine (API Route ühendus)</h3>
      <button
        onClick={handleLoadMessage}
        disabled={loading}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: '4px' }}
      >
        {loading ? 'Laadin...' : 'Load server message'}
      </button>

      {loading && <p style={{ color: '#555' }}>⏳ Päring käib...</p>}
      {error && <p style={{ color: 'red' }}>❌ Viga: {error}</p>}
      {message && (
        <p style={{ color: 'green', marginTop: '1rem' }}>
          📩 <strong>Serveri vastus:</strong> {message}
        </p>
      )}
    </div>
  );
}
