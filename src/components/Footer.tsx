import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#9CB983] bg-[#F3FDE8] text-[#354B25]">
      <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm space-y-2">
        <p className="font-medium">Desenvolvido por</p>
        <p className="font-semibold">Gabriel Bino e Gilberto Bino</p>
        <div className="flex justify-center gap-6 text-[#426221]">
          <a href="https://www.instagram.com/gabrielfbino?igsh=bjQ0b3FiamVuZnk5&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Gabriel">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/gabrielfbino?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Gabriel">
            <FaLinkedin size={18} />
          </a>
          <a href="https://www.instagram.com/gilbertobarcelosb?igsh=YTI5YXJ3ZmdzZnR0&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Gilberto">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/gilberto-barcelos-bino-995574155?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Gilberto">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
