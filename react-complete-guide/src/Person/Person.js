import React from 'react';
import './Person.css';

// In its simplest form,, a Component is just a function that returns jsx
// props = properties passed in (properties of components)
const person = (props) => {
    // when using class-based components, it's "this.props"!!
    return (
        // want to also display children (bwtween opning and closign HTML tags)
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
            {/* Working 2-way binding but there is a better way */}
            <input type="text" onChange={props.changed} value={props.name} />

        </div>

    )
};

export default person;