import { useEffect, useState } from "react"
import { CharacterDetails } from "../../components/characterDetails/characterDetails"
import '../People/people.css'

export const PeopleComponent = () => {

    const [results, setCharacters] = useState([])
    const URL = 'https://swapi.dev/api/people'

    const handleFetchCharacters = async () => {
        try {

            const response = await fetch(URL)
            const result = await response.json()

            setCharacters(result)

            console.log(result)


        }

        catch (error) {

            throw new Error(error)
        }
    }



    useEffect(() => {

        handleFetchCharacters()

        console.log(results)
    }, [])


    return (


        <>
            <p>People page: Character info</p>

            <div className="characters">


                {results.length !== 0 ? results.results.map((character,index) => (

                    <CharacterDetails key={index} results={character} />
                )) : <p className="loadingOne">Loading...</p>}




            </div>
        </>

    )
}