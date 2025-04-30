import React, { useState } from 'react';

interface GalleryModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({ images, currentIndex, onClose, onPrev, onNext }: GalleryModalProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) onNext();      // swipe para a esquerda
    if (diff < -50) onPrev();     // swipe para a direita
    setTouchStartX(null);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-3xl font-bold">&times;</button>

      <img src={images[currentIndex]} alt={`Foto ${currentIndex + 1}`} className="max-h-[80vh] max-w-full rounded" />

      <p className="mt-4 text-sm">Foto {currentIndex + 1} de {images.length}</p>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button onClick={onPrev} className="text-3xl font-bold hover:text-[#6CBD46]">&larr;</button>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button onClick={onNext} className="text-3xl font-bold hover:text-[#6CBD46]">&rarr;</button>
      </div>
    </div>
  );
}
