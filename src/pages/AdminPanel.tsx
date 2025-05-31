import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../services/firebaseService.ts';

interface GuestEntry {
  name: string;
  confirmed: boolean;
  gift?: string;
  children?: number;
}

export default function AdminPanel() {
  const [guests, setGuests] = useState<GuestEntry[]>([]);
  const notGoingGuests = guests.filter(g => g.confirmed === false);
  
  useEffect(() => {
    const q = query(collection(db, 'guests'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data() as GuestEntry);
      setGuests(data);
    });

    return () => unsubscribe();
  }, []);

  const confirmedGuests = guests.filter(g => g.confirmed);
  const giftedGuests = guests.filter(g => g.gift);

  const totalAdults = confirmedGuests.length;
  const totalChildren = confirmedGuests.reduce((sum, g) => sum + (g.children || 0), 0);
  const totalGuests = totalAdults + totalChildren;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Painel do Admin 👑</h1>

      <div className="mb-6 text-sm text-gray-600">
        <p><strong>Adultos confirmados:</strong> {totalAdults}</p>
        <p><strong>Crianças confirmadas:</strong> {totalChildren}</p>
        <p><strong>Total de convidados:</strong> {totalGuests}</p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Convidados confirmados</h2>
        {confirmedGuests.length === 0 ? (
          <p className="text-gray-600">Nenhuma confirmação ainda.</p>
        ) : (
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            {confirmedGuests.map((g, i) => (
              <li key={i}>
                {g.name}
                {typeof g.children === 'number' && g.children > 0 && ` — ${g.children} criança(s)`}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Presentes recebidos</h2>
        {giftedGuests.length === 0 ? (
          <p className="text-gray-600">Nenhum presente registrado ainda.</p>
        ) : (
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            {giftedGuests.map((g, i) => (
              <li key={i}>
                {g.name} - {g.gift}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
