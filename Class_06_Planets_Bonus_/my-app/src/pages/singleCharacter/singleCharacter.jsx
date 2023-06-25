import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import '../singleCharacter/singlecharacter.css'

export const SingleCharacter = () => {

    const params = useParams()
    // console.log(params)

    const id = params.id

    const navigate = useNavigate()

    const [singleCharacter, setSingleCharacter] = useState(null)
    const [homeWorld, setHomeWorld] = useState([])

    // FETCH 1
    const fetchSingleCharacterData = async () => {

        try {

            let response = await fetch(`https://swapi.dev/api/people/${id}`)
            console.log("HAPENED")
            const result = await response.json()
            setSingleCharacter(result)
            //  console.log(result)

        } catch (error) {

            throw new Error(error)
        }


    }


    // FETCH 2

    const fetchSingleCharacterHomeworld = async () => {

        try {

            let response = await fetch(singleCharacter.homeworld)

            const result = await response.json()
            setHomeWorld(result)
            //  console.log(result)

        } catch (error) {

            throw new Error(error)
        }


    }

    // FETCH 1 
    //calling, we change state when this finished and "singleCharacter" has value
    //wich is crucial to the second fetch
    useEffect(() => {
        fetchSingleCharacterData()
        
        // console.log(homeWorld)


    }, [])


    //FETCH 2 
    //it will run the fetch only if there is a value for "singleCharacter"
    // and it will rerender when the value for singleCharacter is changed,
    // allowing me to fetch homeworld data for every clicked charachter
    // NOTE: with if check i prevent error on initial/first render of the component
    useEffect(() => {
        if(singleCharacter)
        {fetchSingleCharacterHomeworld()}

        

    }, [singleCharacter])


    return (


        <div className="singleCharacterContainer">
            
            { singleCharacter && homeWorld  ? 
                <div className="singleCharacterContents">
                    <h2>Character info:</h2>
                    <p><strong>Name: </strong>{singleCharacter.name}</p>
                    <p><strong>Height: </strong>{singleCharacter.height} cm</p>
                    <p><strong>Gender: </strong>{singleCharacter.gender}</p>
                    <p><strong>Birthyear: </strong>{singleCharacter.birth_year}</p>
                    <h2>Home world data:</h2>
                    <p><strong>Name of World: </strong>{homeWorld.name}</p>
                    <p><strong>Diameter: </strong>{homeWorld.diameter} km</p>
                    <p><strong>Climate: </strong>{homeWorld.climate}</p>
                    <p><strong>Gravity: </strong>{homeWorld.gravity}</p>
                    <p><strong>Terrain: </strong>{homeWorld.terrain}</p>
                    <p><strong>Population: </strong>{homeWorld.population}</p>
                </div>

                : <h2>Loading.....</h2>}

                <button onClick={() => navigate(-1)}>Go back</button>


            {/* {console.log("Rendering",singleCharacter)} */}

        </div>
    )
}