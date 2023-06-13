// # Exercise 1.5: Functional Component

// - Create a functional component Academies
// - Render this component in App.
// - The component should accept 2 props: acedemies (array of academy objects), name.
// - In "h2" Element print the name property
// - In "div" map through the academies and render each academy with it's props.
//The academy name should be in "h3", and description in "p"

// - NOTE: Academy object should look as {id: string, name: string, description: string}

import "./Exercise_1.5.css";
import AcademyPrintComponent from "./bonus";

const Academies = (props) => {
  return (
    <div>
      <h1>Exercise 1.5 </h1>

      <h2 className="title_02">{props.name}</h2>

      <div className="mainContainer">
        {props.academies.map((academy) => (
          <div key={academy.description} className="nameDesc">
            {/** WAY 1  */}
            {/* <h3>Academy name: {academy.name}</h3>
                            <p>Description: {academy.description}</p> */}

            {/** WAY 2   */}
            <AcademyPrintComponent academy={academy} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academies;
