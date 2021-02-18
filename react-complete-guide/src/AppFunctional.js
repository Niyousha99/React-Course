import React, { useState } from 'react'; // most important react hook
import './App.css';
import Person from './Person/Person';

const App = props => {
    // useState returns array with always 2 elements:
    // current state and function for updating state such that react is aware
    // and will update DOM
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Niyousha", age: 21 },
            { name: "Nahid", age: 44 },
            { name: "Ehsan", age: 48 }
        ],
        otherState: "some other state"
    });

    // can have multiple calls to useState
    const [otherState, setOtherState] = useState("some other value");

    const switchNameHandler = () => {
        // DON'T DO THIS MUTATION OF STATE AT RUN TIME
        // this.state.persons[0].name = "Not Niyousha";
        // setState updates react of the change in state
        // only available in class-based components
        setPersonsState({
            persons: [
                { name: "Niyousha2", age: 21 },
                { name: "Nahid2", age: 44 },
                { name: "Ehsan2", age: 48 }
            ]
        })
    }

    return (
        <div className="App">
            <h1>HELLOO</h1>
            <p>This is really working!!</p>

            <button onClick={switchNameHandler}>Switch Name</button>

            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is cooking!</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );

    // 'h1' is interpretred as text by default; would need to create another element
    // writing code like this is very cumbersome!!
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'), null);
}


export default App; 
