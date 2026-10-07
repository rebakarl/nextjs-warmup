'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '1.5rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Interaktiivne loendur (Client Component)</h3>
      <p>Praegune arv: <strong>{count}</strong></p>
      <button
        onClick={() => setCount(prev => prev + 1)}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: '4px' }}
      >
        Suurenda arvu
      </button>
    </div>
  );
}
