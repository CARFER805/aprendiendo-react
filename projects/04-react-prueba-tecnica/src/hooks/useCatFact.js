import { useState, useEffect } from 'react';
import { getRandomFact } from '../service/facts';
export function useCatFact() {
  const [fact, setFact] = useState(' ');

  // para recuprar la cita al cargar la pagina
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  // para recuprar la cita al cargar la pagina
  useEffect(refreshFact, []);
  return { fact, refreshFact };
}
