import React from 'react';
import GiftList from '../components/GiftList.tsx';
import { Gift, Guest } from '../types/index.ts';
import Navbar from '../components/Navbar.tsx';
import PixSection from '../components/PixSection.tsx';

interface Props {
  guest: Guest | null;
  gifts: Gift[];
  setGifts: (gifts: Gift[]) => void;
}

export default function FullGiftList({ guest, gifts, setGifts }: Props) {
  return (
    <main className="max-w-2xl mx-auto pt-24 px-3">
      <Navbar />
      <PixSection pixKey="27992342095" />
      <GiftList guest={guest} gifts={gifts} setGifts={setGifts} />
    </main>
  );
}
