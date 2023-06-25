import '../characterDetails/characterDetails.css'
import {useNavigate} from "react-router"
export const CharacterDetails = (props) => {
    const navigate = useNavigate()
    const {results} = props

    // since there is no direct "id" property i read the result and figured out
    //that the "url" property for each person has an 'id' at the end
    // i am extracting this number to pass it to the path parametar
    const splitedUrl = results.url.split("/")

    // console.log(splitedUrl)

    const idExtracted = splitedUrl[5]
    // console.log(idExtracted)


    return(

        <div onClick={() => navigate(`/character/${idExtracted}`)} className='charactersCard'>

        
        <p><strong>Name: </strong>{results.name}</p>
        <p><strong>Height: </strong>{results.height} cm</p>
        <p><strong>Gender: </strong>{results.gender}</p>
        <p><strong>Birthyear: </strong>{results.birth_year}</p>
        </div>

       
    )
}