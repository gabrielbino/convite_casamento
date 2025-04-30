import React, { useEffect, useState } from 'react';
import Gallery from '../components/Gallery.tsx';
import GalleryModal from '../components/GalleryModal.tsx';

const photos = [
  '/gallery/01.jpg',
  '/gallery/02.jpg',
  '/gallery/03.jpg',
  '/gallery/04.jpg',
  '/gallery/05.jpg',
  '/gallery/06.jpg',
  '/gallery/07.jpg',
  '/gallery/08.jpg',
  '/gallery/09.jpg',
  '/gallery/10.jpg',
  '/gallery/11.jpg',
  '/gallery/12.jpg',
  '/gallery/13.jpg',
  '/gallery/14.jpg',
  '/gallery/15.jpg',
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
  );
}
