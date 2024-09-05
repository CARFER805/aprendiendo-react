export const saveGameToStorage = ({ board, turn }) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
  } else {
    console.error('localStorage no está disponible.');
  }
};

export const resetGameStorage = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
};
