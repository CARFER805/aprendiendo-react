const API_KEY = '4287ad07';

export const searchMovies = async ({ search }) => {
  if (search === '') return null;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=4287ad07&s=${search}`
    );
    const json = await response.json();
    //console.log(json);
    const movies = json.Search;
    //console.log(movies);
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (Error) {
    throw new Error('Error searching movies');
  }
};
