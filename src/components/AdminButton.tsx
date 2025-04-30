// src/components/AdminLoginButton.tsx
import React, { useState } from 'react';

interface Props {
  onLogin: (password: string) => void;
}

export default function AdminLoginButton({ onLogin }: Props) {
  const [showInput, setShowInput] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onLogin(password);
    setShowInput(false);
    setPassword('');
  };

  return (
    <>
      {!showInput ? (
        <button
          onClick={() => setShowInput(true)}
          className="bg-[#426221] hover:bg-[#6CBD46] text-white text-sm px-4 py-2 rounded transition"
        >
          Entrar como admin
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#6CBD46] text-black rounded px-2 py-1 text-sm"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#5B8C3C] hover:bg-[#6CBD46] text-white text-sm px-4 py-1 rounded"
          >
            Entrar
          </button>
        </div>
      )}
    </>
  );
}
