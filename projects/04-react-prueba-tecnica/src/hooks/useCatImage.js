import { useState, useEffect } from 'react';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/';

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState(' ');

  useEffect(() => {
    if (!fact) return;
    const threeFirstWord = fact.split(' ').slice(0, 3).join(' ');
    // console.log(threeFirstWord);
    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        const { _id } = response;
        // console.log(_id);
        setImageUrl(_id);
        // console.log(imageUrl);
      });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}
