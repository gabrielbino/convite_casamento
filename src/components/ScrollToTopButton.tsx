import React, { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-[#ccc] text-white p-3 rounded-full shadow-lg hover:bg-[#6CBD46] transition duration-300"
      aria-label="Voltar ao topo"
    >
      <ChevronUpIcon className="w-5 h-5 text-white" />
    </button>
  );
}
