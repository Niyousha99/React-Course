import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

/* CSS Modules
 the following line imports all classes from CSS file as properties of the 'classes' object 
 i.e. maps them as unique class names
 Advantage: Won't clash with same class names assigned to other styles in another component
 since each CSS class gets a randomly generated unique name
*/

import classes from './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
// import styled from 'styled-components';


// write regular CSS in string template argument of styled-component
// can add dynamic values in string
// ternary expression: if props.alt === true, then rurn red, otherwise turn green
/*
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover: { 
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;
*/

// JS class extends from Component object
// think of variable as property of a class
class App extends Component {
  // state is managed from inside the component; this property only works in class-based components unless using hooks!
  // stores JS object as internal data
  // if state changes, it will re-render the DOM
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler(personIndex) {
    /* IMPORTANT
     * if splice() was not used, then persons would be assigned to a reference pointer to original state
     * This would be BAD PRACTICE: mutates original data which can make app unpredictable
     */
    const persons = [...this.state.persons]; // modern way to copy old array into new array
    // const persons = this.state.persons.slice(); // alternative way to copy array
    persons.splice(personIndex, 1); // removes 1 element from the array
    this.setState({ persons: persons }); // update state
  }

  /*
  // Event handler - "this" will no refer to object at runtime
  switchNameHandler = (newName) => {
    // DON'T DO THIS MUTATION OF STATE AT RUN TIME
    // this.state.persons[0].name = "Not Niyousha";

    // setState updates react of the change in state
    // only available in class-based components
    // THIS DOES NOT MERGE WITH OLD STATE BUT OVERRIDES IT WITH NEW STATE
    this.setState({
      persons: [
        { name: "daughter2", age: 21 },
        { name: "mom2", age: 44 },
        { name: newName, age: 48 }
      ]
    })
  }
  */

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); // executes function on every element and returns index of first element where predicate is true  
    const person = { ...this.state.persons[personIndex] }; // distribute all properties of old object into new object
    person.name = event.target.value;
    // update original array in state
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; // this keyword always refers to this class in arrow function
    this.setState({ showPersons: !doesShow }); // toggles showPersons - old state not overriden, just merged with new state!
  }

  render() { // react calls this method to render some HTML code to the screen
    // inline styles => good for scoping the style, not making it global

    /*
    const style = { // doens't work with pseudo selectors (e.g., hover)
      backgroundColor: "green",
      color: "white",
      font: "inherit", // inherit from surrounding font
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": { // using Radium for pseudo selector
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    */

    let persons = null;

    let btnClass = [classes.Button];

    // render content conditionally
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // want jsx representative of every array object element
            // IMPORTANT: always include key (default) property when rendering lists of data - helps update lists efficiently

            // ErrorBoundary is a higher-order component that wraps Person
            // key should be something unique like id (index is not a good key cause it can change)
            // key nust always be in outer element for a mep method
            return <ErrorBoundary key={person.id} ><Person
              click={() => this.deletePersonHandler(index)} // executed as arrow function. alternative: bind(this, inddex)
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>
          })}
        </div>
      );

      /*
      style.backgroundColor = "red"; // change style
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
      */

      btnClass.push(classes.Red);

    }
    /* 
    // Another option: Ternary expression (but hard to work with)
    this.state.showPersons === true ?
    <div>
    ...
    </div> : null // else condition (render null)
    */

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ["red", "bold"]
    }

    return (
      /* JSX code - syntaxical sugar that works in .jsx and .js
         Allows to write "HTML-ish" code but can't use certain words
         e.g., "class" => "className" which translates to "class" once rendered
         It is best practise to wrap everything into one root element per component!
      */
      // <StyleRoot> {/* Need to wrap in StyleRoot for Radium to work*/}
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          // Can also pass methods as props to change state from another
          // component that doesn't have access to the state
          // "bind" controls what "this" refers to
          // next arguments after "this" are passed to invoking method
          // alt={this.state.showPersons}
          className={btnClass.join(' )')}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}  {/*either null or holds jsx code*/}
      </div>
      // </StyleRoot>
    );

    // 'h1' is interpretred as text by default; would need to create another element
    // writing code like this is very cumbersome!!
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'), null);
  }
}

//export default Radium(App); // higher order component (wrap App in Radium) 

export default App;