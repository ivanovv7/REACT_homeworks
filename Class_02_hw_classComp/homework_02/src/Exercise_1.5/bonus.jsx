// // BONUS: Create class component Acedemy, that will accept one prop called academy
// (this is the academy object). In the previous requirement, when iterating

// // though the array of academies instead of rendering the "h3" and "p" with the coresponding
//  values, render this component Academy and provide the academy object as props.

// // Now the "h3" and "p" should be part of the Academy component and should render the coresponding values.

import { Component } from "react";

class AcademyPrintComponent extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
  }

  render() {
    return (
      <>
        <h3>Academy name: {this.props.academy.name}</h3>
        <p>Description: {this.props.academy.description}</p>
      </>
    );
  }
}

export default AcademyPrintComponent;
