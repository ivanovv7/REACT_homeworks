import { useEffect, useState } from "react"
import { MoviesCard } from "../../components/Movies/movies"
import '../Home/home.css'


export const HomeComponent = () => {
  const [results, setResults] = useState([]);
  const URL = "https://swapi.dev/api/films/";

  const handleFetchHome = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setResults(result);

      console.log(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {

    // if(results.length > 0) return
    handleFetchHome();
    console.log(results);
  }, []);


  return (
    <>
      <p>Home page: Movies listing and general info</p>

      <div className="movies">

       
         {results.length !== 0 ? results.results.map((movie) => (
             
             <MoviesCard key ={movie.release_date} results = {movie} />
         ))   : <p className="loadingOne">Loading...</p>}
      
      
        
      </div>
    </>
  );
}