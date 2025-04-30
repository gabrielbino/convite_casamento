import React, { useState } from 'react';
import { saveGuest } from '../services/firebaseGuestsService.ts';
import AlertBox from './AlertBox.tsx';

interface PresenceFormProps {
  onSubmit: (name: string) => void;
}

export default function PresenceForm({ onSubmit }: PresenceFormProps) {
  const [name, setName] = useState('');
  const [confirmed, setConfirmed] = useState(true); // true = irá ao evento
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setAlert({ message: 'Por favor, preencha o nome.', type: 'error' });
      return;
    }

    try {
      await saveGuest(name, confirmed, undefined, undefined, adults, children);
      onSubmit(name);
      setAlert({ message: 'Presença registrada com sucesso!', type: 'success' });
      setName('');
      setAdults(1);
      setChildren(0);

      setTimeout(() => setAlert(null), 3000);
    } catch (error: any) {
      setAlert({ message: error.message || 'Erro ao salvar confirmação.', type: 'error' });
    }
  };

  return (
    <section className="mt-12 max-w-xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-serif tracking-wide mb-8 text-[#354B25]">CONFIRME SUA PRESENÇA</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-left">
          <label className="block mb-1 font-medium">Nome completo</label>
          <input
            type="text"
            placeholder="Insira seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#9CB983] rounded px-4 py-2 text-gray-800"
          />
        </div>

        <div className="text-left">
          <label className="block mb-1 font-medium">Você irá ao evento?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="confirm"
                checked={confirmed}
                onChange={() => setConfirmed(true)}
              />
              sim
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="confirm"
                checked={!confirmed}
                onChange={() => setConfirmed(false)}
              />
              não
            </label>
          </div>
        </div>

        <div className="text-left">
          <label className="block mb-1 font-medium">
            Quantidade de adultos incluindo você
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full border border-[#9CB983] rounded px-4 py-2 text-gray-800 bg-white"
          >
            {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="text-left">
          <label className="block mb-1 font-medium">Quantidade de crianças</label>
          <select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="w-full border border-[#9CB983] rounded px-4 py-2 text-gray-800 bg-white"
          >
            {Array.from({ length: 6 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#426221] hover:bg-[#6CBD46] text-white font-semibold px-6 py-2 rounded transition w-full"
        >
          Confirmar presença
        </button>
      </form>

      {alert && (
        <div className="mt-4">
          <AlertBox message={alert.message} type={alert.type} />
        </div>
      )}
    </section>
  );
}
