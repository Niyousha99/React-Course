import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';

/* CSS Modules
 the following line imports all classes from CSS file as properties of the 'classes' object 
 i.e. maps them as unique class names
 Advantage: Won't clash with same class names assigned to other styles in another component
 since each CSS class gets a randomly generated unique name
*/
import classes from './App.css';

class App extends Component {

  // this more modern syntax will call constructor, super, and set initial state automatically!
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
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

  render() {
    let persons = null;

    // render content conditionally
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      // <StyleRoot> {/* would need to wrap in StyleRoot for Radium to work*/}
      <div className={classes.App}>
        <Cockpit showPersons=
          {this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}  {/*either null or holds jsx code*/}
      </div>
      // </StyleRoot>
    );
  }
}

//export default Radium(App); // higher order component (wrap App in Radium) 
export default App;