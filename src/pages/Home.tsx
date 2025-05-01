import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Guest, Gift } from '../types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseService.ts';

import Header from '../components/Header.tsx';
import PresenceForm from '../components/PresenceForm.tsx';
import GiftList from '../components/GiftList.tsx';
import PixSection from '../components/PixSection.tsx';
import Countdown from '../components/Countdown.tsx';
import Location from '../components/Location.tsx';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import ScrollToTopButton from '../components/ScrollToTopButton.tsx';

interface HomeProps {
  guests: Guest[];
  setGuests: (guests: Guest[]) => void;
  gifts: Gift[];
  setGifts: (gifts: Gift[]) => void;
}

export default function Home({ guests, setGuests, gifts, setGifts }: HomeProps) {
  const [guest, setGuest] = useState<Guest | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGifts = async () => {
      const snapshot = await getDocs(collection(db, 'guests'));
  
      const updatedTaken = snapshot.docs
        .map(doc => doc.data())
        .filter(data => data.giftId !== undefined && data.giftId !== null)
        .map(data => data.giftId);
  
      const updated = gifts.map(gift => ({
        ...gift,
        taken: updatedTaken.includes(gift.id),
        chosenBy: updatedTaken.includes(gift.id)
          ? snapshot.docs.find(doc => doc.data().giftId === gift.id)?.data().name
          : undefined,
      }));
  
      setGifts(updated);
    };
  
    fetchGifts();
  }, [gifts, setGifts]);

  const previewGifts = gifts.slice(0, 6);
    
  return (
    <div id="home">
      <Navbar />

      <Header
        groom="Daniel"
        bride="Kristielly"
        date="2025-06-07"
        location="Chácara Timoneiro, Serra"
      />

      <section className="bg-white text-center py-8 px-4">
        <p className="max-w-2xl mx-auto text-[#354B25] text-lg">
          Este site foi feito com carinho para compartilharmos com você cada detalhe do nosso grande dia. Estamos muito felizes e contamos com sua presença nesse dia especial!
        </p>
      </section>

      <Countdown />

      <section id="ceremony">
        <Location />
      </section>

      <div id="gifts" className="max-w-2xl mx-auto p-3">
        
        <PixSection pixKey="27992342095" />

        <section className="mt-4 text-center relative">          
          <div className="overflow-hidden relative max-h-[600px]">
            <div className="blur-md absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
            <GiftList
              guest={guest}
              gifts={previewGifts}
              setGifts={setGifts}
            />
          </div>

          <button
            onClick={() => navigate('/gifts')}
            className="mt-6 bg-[#426221] hover:bg-[#6CBD46] text-white font-semibold px-6 py-2 rounded transition z-20 relative"
          >
            Ver lista completa
          </button>
        </section>

        <section id="confirmed">
          <PresenceForm onSubmit={(name) => {
            const newGuest = { name };
            setGuests([...guests, newGuest]);
            setGuest(newGuest);
          }} />
        </section>
      </div>

      <ScrollToTopButton />

      <Footer />
    </div>
  );
}
