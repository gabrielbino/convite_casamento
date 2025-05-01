import React from 'react';
import { Gift, Guest } from '../types/index.ts';

import GiftList from '../components/GiftList.tsx';
import Navbar from '../components/Navbar.tsx';
import PixSection from '../components/PixSection.tsx';
import Footer from '../components/Footer.tsx';
import ScrollToTopButton from '../components/ScrollToTopButton.tsx';

interface Props {
  guest: Guest | null;
  gifts: Gift[];
  setGifts: (gifts: Gift[]) => void;
}

export default function FullGiftList({ guest, gifts, setGifts }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="max-w-2xl mx-auto pt-24 px-3">
        <PixSection pixKey="27992342095" />
        <GiftList guest={guest} gifts={gifts} setGifts={setGifts} />
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
