import { Constants } from "../helpers/arrayOfMovies.jsx";
import "../components/MoviesList.css";

const MovieList = function () {
  const welcomeMsg = "Welcome to your";
  const movieWord = "Movie";
  //the array is in a helper file so that this code is not bloated
  // store the movie object/array that i have imported
  const arrayOfMovies = Constants.movieArray;

  return (
    // Welcome message ***
    <div id="divParent">
      {/* {console.log(arrayOfMovies)} */}
      <h1>
        {welcomeMsg} {movieWord} List
      </h1>

      <ul>
        {arrayOfMovies.map((movie) => {
          return (
            <li key={movie.movieName}>
              <strong>Movie name:</strong> {movie.movieName} <br />
              <strong>Genre:</strong> {movie.genre} <br />
              <strong>Actor:</strong> {movie.actor} <br />
              <strong>Released:</strong> {movie.releaseYear} <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
