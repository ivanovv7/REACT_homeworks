import'../Movies/movies.css'

export const MoviesCard = (props) => {

    const {results} = props
    // console.log(results)


    return(

        // <div className="moviesCard">
         <div className='moviesCard'>
         <p><strong>Title:</strong>{results.title}</p>
         <p><strong>Director:</strong>{results.director}</p>
         <p><strong>Producer:</strong>{results.producer}</p>
         <p><strong>Release date:</strong>{results.release_date}</p>
         <p><strong>Opening:</strong>{results.opening_crawl}</p>

        {/* </div> */}
        </div>
    )
}