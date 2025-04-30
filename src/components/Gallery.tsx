import React, { useEffect, useState } from 'react';
import Footer from './Footer.tsx';

interface GalleryProps {
  images: string[];
  onImageClick: (index: number) => void;
}

export default function Gallery({ images, onImageClick }: GalleryProps) {  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Foto ${idx + 1}`}
          className="rounded shadow-md cursor-pointer hover:scale-105 transition"
          onClick={() => onImageClick(idx)}
        />
      ))}
    </div>
  );
}
