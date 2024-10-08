import { WINNER_COMBOS } from '../constants.js';
export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // reviamos si hay un empate
  // si ni hay mas espacios vacios
  // en el tablero
  return newBoard.every((square) => square !== null);
};
