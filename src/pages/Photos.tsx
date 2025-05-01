import React, { useEffect, useState } from 'react';

import Gallery from '../components/Gallery.tsx';
import GalleryModal from '../components/GalleryModal.tsx';
import Footer from '../components/Footer.tsx';
import Navbar from '../components/Navbar.tsx';

const photos = [
  '/gallery/01.webp',
  '/gallery/02.webp',
  '/gallery/03.webp',
  '/gallery/04.webp',
  '/gallery/05.webp',
  '/gallery/06.webp',
  '/gallery/07.webp',
  '/gallery/08.webp',
  '/gallery/09.webp',
  '/gallery/10.webp',
  '/gallery/11.webp',
  '/gallery/12.webp',
  '/gallery/13.webp',
  '/gallery/14.webp',
  '/gallery/15.webp',
];

export default function Photos() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [currentIndex]);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const prev = () => setCurrentIndex((prev) => (prev! - 1 + photos.length) % photos.length);
  const next = () => setCurrentIndex((prev) => (prev! + 1) % photos.length);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-24 px-4 max-w-5xl mx-auto">
        <h1 id="photos" className="text-2xl text-center md:text-3xl font-serif tracking-wide mb-8 text-[#354B25]">GALERIA DE FOTOS</h1>

        <Gallery images={photos} onImageClick={openModal} />

        {currentIndex !== null && (
          <GalleryModal
            images={photos}
            currentIndex={currentIndex}
            onClose={closeModal}
            onPrev={prev}
            onNext={next}
          />
        )}
      </main>
      {currentIndex === null && (
        <div className="w-full mt-12">
          <Footer />
        </div>
      )}
    </div>
  );
}
