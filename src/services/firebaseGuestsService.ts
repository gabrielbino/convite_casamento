import { db } from './firebaseService.ts';
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { normalizeName } from '../utils/utils.ts';

export async function saveGuest(
  name: string,
  confirmed: boolean,
  giftName?: string,
  giftId?: number,
  adults: number = 1,
  children: number = 0,
  allowMultiple?: boolean
): Promise<void> {
  try {
    const normalizedId = normalizeName(name);
    const guestsRef = collection(db, 'guests');

    if (giftId !== undefined && !allowMultiple) {
      const giftQuery = query(guestsRef, where('giftId', '==', giftId));
      const giftSnapshot = await getDocs(giftQuery);
      if (!giftSnapshot.empty) {
        throw new Error('Este presente já foi escolhido por outro convidado.');
      }
    }

    const existingQuery = query(guestsRef, where('normalizedName', '==', normalizedId));
    const existingSnapshot = await getDocs(existingQuery);

    const payload = {
      name,
      normalizedName: normalizedId,
      confirmed,
      gift: giftName || null,
      giftId: giftId || null,
      adults,
      children,
      timestamp: new Date()
    };

    if (!existingSnapshot.empty) {
      const existingDoc = existingSnapshot.docs[0];
      await updateDoc(doc(db, 'guests', existingDoc.id), payload);
    } else {
      await addDoc(guestsRef, payload);
    }
  } catch (error) {
    console.error('Erro ao salvar convidado:', error);
    throw error;
  }
}
