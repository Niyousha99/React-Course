import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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

  // whole render() function gets called everytime react re-renders component
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // render content conditionally
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // want jsx representative of every array object element
            // IMPORTANT: always include key (default) property when rendering lists of data - helps update lists efficiently!
            return <Person
              click={() => this.deletePersonHandler(index)} // executed as arrow function. alternative: bind(this, inddex)
              name={person.name}
              age={person.age}
              key={person.id}  // key should be something unique like id (index is not a good key cause it can change)
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }
    /* 
    // Another option: Ternary expression (but hard to work with)

    this.state.showPersons === true ?
    <div>
    ...
    </div> : null // else condition (render null)
    */

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}  {/*either null or holds jsx code*/}
      </div>
    );
  }
}

export default App;
