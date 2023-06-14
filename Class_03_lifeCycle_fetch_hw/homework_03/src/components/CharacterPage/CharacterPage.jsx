import { Component } from 'react';
import './CharacterPage.css'
import Character from '../Charachter/Character';

// ## Requirements:

// - Create a class component called CharactersPage, and invoke it in App.jsx

// - Inside CharactersPage, initialize the component state with a property called characters, initially set to an empty array.
// - Implement the componentDidMount() lifecycle method in CharactersPage.
// - Within componentDidMount(), make an API request using the fetch function to retrieve character data from the following URL: https://swapi.dev/api/people.
// - Once the character data is fetched and received successfully, update the characters state property with the retrieved data.
// - Create a class component called Character that accepts a character prop.
// - Inside the Character component, display the following information dynamically: name, height, gender, and birth year, using the data passed through the character prop.
// - Within the CharactersPage component, map over the characters array in the state, and for each character, render a Character component, passing the character data as a prop.

// - NOTE: Style the page as per your preference, utilizing basic CSS or CSS frameworks to enhance the user experience.But please have in mind and do not put to much attention to the css and styling since this is React class.


class CharactersPage extends Component {

    constructor() {
        super();

        this.state = {
            characters: [],
        };

        // console.log("constructor")
    }


    URL = "https://swapi.dev/api/people"

    //  *** FUNCTIONS ***
    handleFetch = async () => {
        // API CALL AND PARSE RESULT FROM CALL
        const response = await fetch(this.URL)
        const result = await response.json()

        // access the result deeper here so that the logic latter is easier accessed
        const resultManipulated = await result.results

        //  console.log(result) // OK
        //  console.log(result.results)
        //  //console.log(resultManipulated)

        // CHANGE STATE AFTER SUCCESFULL CALL
        this.setState({
            characters: [resultManipulated]
        })

        //  console.log(this.state.characters)
    }


    // *** Life Cycle Methods ***
    componentDidMount() {
        // console.log("ComponentDidMount method")

        // call the function to fetch data and to change state of component
        this.handleFetch()

    }


    render() {

        return (
            <div>
                {/* {console.log("rendering phase")}  */}

                {/* *** *** ANIMATION *** *** */ }
                {/**Use ternary operator for conditional rendering, before this there was a problem with .map function !!!! */}
                {/**Since i return more than one element in ternary they need to be wrapped in a parrent element */}
                {this.state.characters.length === 0 ? (<div className='container'> <h3 className='loading'>LOADING ....</h3>, <div className="animation"></div> </div>)
                    :
                    this.state.characters[0].map((character) => (
                        // console.log(this.state.characters),
                        // console.log(character),

                        // Calling of the component and passing the object of current itteration as a PROP !!!
                        <Character key={character.name} characterData={character} />

                    ))}

            </div>
        )
    }
}

export default CharactersPage;