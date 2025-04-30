import React, { use, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel.tsx';
import { Guest, Gift } from './types';
import { initialGifts } from './data/giftList.ts';

import Home from './pages/Home.tsx';
import FullGiftList from './pages/FullGiftList.tsx';
import Photos from './pages/Photos.tsx';
import Location from './components/Location.tsx';
import PresenceForm from './components/PresenceForm.tsx';

export default function App() {
  const [guest, setGuest] = useState<Guest | null>(null);
  const [confirmedGuests, setConfirmedGuests] = useState<Guest[]>([]);
  const [gifts, setGifts] = useState<Gift[]>(initialGifts);
  const [name, setName] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              guests={confirmedGuests}
              setGuests={setConfirmedGuests}
              gifts={gifts}
              setGifts={setGifts}
            />
          }
        />

        <Route 
          path="/gifts"
          element={
            <FullGiftList 
            guest={guest}
            gifts={gifts}
            setGifts={setGifts}
            />
          }
        />

        <Route path="/ceremony" element={<Location />} />
        
        <Route
          path="/confirmed"
          element={
            <PresenceForm 
            onSubmit={(submittedName) => setName(submittedName)}
            />
          } 
        />

        <Route path="/photos" element={<Photos />}/>

        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
