// # Exercise 2: Class Component and State Management

// - Create a class component called Counter that has an initial state value of count set to 0.
// - Render a "div" element that displays the current value of count inside a "p" paragraph.
// - Additionally, include two buttons labeled "Increment" and "Decrement" below the displayed count.
// - When the "Increment" button is clicked, the count state should be increased by 1, and when the 
//"Decrement" button is clicked, the count state should be decreased by 1.


//   - BONUS: Ensure that the count value does not go below 0.
// - Create button "Reset" and when clicked should set the count to 0.
// - Create a "span" element next to the count that displays the word "Even" if the current count is an even number, and "Odd" if count is odd number.
// - Render the Count component in the App Component.
// - Add input type:number, when the field changes on user input, update the count state to the new value. (HINT: use onChange event)
import React from "react";
import './Exercise_2.css'


class Counter extends React.Component {
    //the constructor is executed only once !
    constructor() {
        // must invoke super since our class extends and inxerits
        super();

        //with the keyword "STATE" we tell REACT that this properties are part of the STATE
        this.state = {
            count: 0,
        };
    }


    // FUNCTIONS ()
    increment = () => {
        // setState is a build in function that lets REACT know that these elements will be changed
        // with this  a RE-RENDER is invoked and changes are printed in web-page
        this.setState({
            count: this.state.count + 1
        })
    }



    decrement = () => {
        //  *** BONUS ***
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
            })
        }
        else {
            console.log("You cannot go bellow 0 :)")
        }
    };


    reset = () => {
        this.setState({
            counter: this.state.count = 0
        })
    }

    inputUser = (event) => {
        let value = event.target.value
        //console.log(value) --> OK
        //console.log(typeof value) -> PROBLEM type of input is STRING. Increment/decrement button  concatinates 1+"1" = 11 !

        //  *** ***SOLUTION *** *** :)
        this.setState({
            count: Number(value)
        })
    }


    // RENDERING
    render() {
        return (
            <div className="counter-container">

                <h1 className="counter-heading">EXERCISE 2</h1>

                <p className="counter-value">Counter value: {this.state.count}</p>

                <span>{this.state.count % 2 === 0 || this.state.count === 0 ? "Number is even" : "Number is odd"} </span>


                <div className="counter-buttons">
                    {/**INCREMENT */}
                    <button className="counter-button" onClick={() => this.increment()}>Increment</button>

                    {/**DECREMENT */}
                    <button className="counter-button" onClick={() => this.decrement()}>Decrement</button>

                    {/*BONUS RESET --> pass callBack by reference only */}
                    <button className="counter-button" onClick={this.reset}>Reset</button>

                    {/*BONUS INPUT*/}
                    <input type="number" onChange={this.inputUser} />
                </div>
            </div>
        );
    }
}

export default Counter;