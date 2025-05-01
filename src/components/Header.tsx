import React, { useEffect, useState } from 'react';

interface HeaderProps {
  bride: string;
  groom: string;
  date: string;
  location: string;
}

export default function Header({
  bride,
  groom
}: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

  }, []);

  return (
    <header
      className="relative min-h-[60vh] sm:min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center sm:justify-start px-4 sm:px-12 text-white rounded-b-xl"
      style={{ backgroundImage: `url(${isMobile ? '/mobile.webp' : '/desktop.webp'})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-0" />

      <div className="relative z-10 text-center sm:text-left max-w-[90%] sm:max-w-[40%]">
        <h1
          className="text-4xl sm:text-5xl font-bold italic drop-shadow-lg text-[#F3FDE8]"
          style={{ fontFamily: 'Literaturnaya, serif' }}
        >
          {groom} & {bride}
        </h1>
      </div>
    </header>
  );
}
