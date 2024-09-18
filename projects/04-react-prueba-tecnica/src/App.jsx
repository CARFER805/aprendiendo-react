import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  const wordFirsThree = () => {
    if (fact) {
      const threeFirstWord = fact.split(' ').slice(0, 3).join(' ');
      return threeFirstWord;
    }
  };
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${imageUrl}/says/${wordFirsThree()}`}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}
