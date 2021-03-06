import React, { Component } from 'react';
import Person from './Person/Person';

// can replace {} with () for just return statement in arrow function
class persons extends Component {

    // Performance improvement! only re-render Persons component if it changed!
    shouldComponentUpdate(nextProps, nextState) {
        // comparing pointer references (okay because new objects and arrays are being created through deep copy in App.js)
        return nextProps.persons !== this.props.persons;
    }

    render() {
        return this.props.persons.map((person, index) => { // want jsx representative of every array object element
            // IMPORTANT: always include key (default) property when rendering lists of data - helps update lists efficiently
            // key should be something unique like id (index is not a good key cause it can change)
            // key must always be in outer element for a mep method if wrapped in higher order element
            return (<Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)} // executed as arrow function. alternative: bind(this, inddex)
                changed={event => this.props.changed(event, person.id)} />
            );
        });
    }
}

export default persons;