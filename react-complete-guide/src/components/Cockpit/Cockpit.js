import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // HTTP request...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

        return () => {
            clearTimeout(timer); // clean up when Cockput is unmounted
            console.log('cleanup work in useEffect');
        };

    }, []);

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) btnClass = classes.Red;

    if (props.persons.length <= 2) assignedClasses.push(classes.red); // classes = ["red"]
    if (props.persons.length <= 1) assignedClasses.push(classes.bold); // classes = ["red", "bold"]


    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                // Can also pass methods as props to change state from another
                // component that doesn't have access to the state
                // "bind" controls what "this" refers to
                // next arguments after "this" are passed to invoking method
                // alt={this.state.showPersons}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;