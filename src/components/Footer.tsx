import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#9CB983] bg-[#F3FDE8] text-[#354B25]">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="font-medium tracking-wide text-center sm:text-left">
          <p>Desenvolvido por</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Gabriel Bino</span>
            <a
              href="https://instagram.com/seu_instagram_gabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#426221] hover:text-[#6CBD46] transition"
              aria-label="Instagram de Gabriel"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com/in/seu_linkedin_gabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#426221] hover:text-[#6CBD46] transition"
              aria-label="LinkedIn de Gabriel"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
          <span className="font-semibold">e</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Gilberto Bino</span>
            <a
              href="https://instagram.com/seu_instagram_gilberto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#426221] hover:text-[#6CBD46] transition"
              aria-label="Instagram de Gilberto"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com/in/seu_linkedin_gilberto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#426221] hover:text-[#6CBD46] transition"
              aria-label="LinkedIn de Gilberto"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
