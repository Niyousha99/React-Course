import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// JS class extends from Component object
// think of variable as property of a class
class App extends Component {
  // state is managed from inside the component; this property only works in class-based components unless using hooks!
  // stores JS object as internal data
  // if state changes, it will re-render the DOM
  state = {
    persons: [
      { name: "Niyousha", age: 21 },
      { name: "Nahid", age: 44 },
      { name: "Ehsan", age: 48 }
    ],
    otherState: "some other state"
  }

  // Event handler - "this" will no refer to object at runtime
  switchNameHandler = (newName) => {
    // DON'T DO THIS MUTATION OF STATE AT RUN TIME
    // this.state.persons[0].name = "Not Niyousha";

    // setState updates react of the change in state
    // only available in class-based components
    // THIS DOES NOT MERGE WITH OLD STATE BUT OVERRIDES IT WITH NEW STATE
    this.setState({
      persons: [
        { name: "Niyousha2", age: 21 },
        { name: "Nahid2", age: 44 },
        { name: newName, age: 48 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Niyousha", age: 21 },
        { name: event.target.value, age: 44 },
        { name: "Ehsan", age: 48 }
      ]
    })
  }


  render() { // react calls this method to render some HTML code to the screen
    // inline styles => good for scoping the style, not making it global
    const style = {
      backgroundColor: "white",
      font: "inherit", // inherit from surrounding font
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      /* JSX code - syntaxical sugar that works in .jsx and .js
         Allows to write "HTML-ish" code but can't use certain words
         e.g., "class" => "className" which translates to "class" once rendered
         It is best practise to wrap everything into one root element per component!
      */
      <div className="App">
        <h1>HELLOO</h1>
        <p>This is really working!!</p>

        <button
          style={style}
          onClick={() => this.switchNameHandler("Mr. Raeesinejad")}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // Can also pass methods as props to change state from another
          // component that doesn't have access to the state
          // "bind" controls what "this" refers to
          // next arguments after "this" are passed to invoking method
          click={this.switchNameHandler.bind(this, "Mom")}
          changed={this.nameChangedHandler}>My hobby is cooking!</Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

    // 'h1' is interpretred as text by default; would need to create another element
    // writing code like this is very cumbersome!!
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'), null);
  }
}

export default App; 
