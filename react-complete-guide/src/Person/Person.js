import React from 'react';
//import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css';

// every method in this styled object creates a react component
/*
const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`; // store result of method call
*/

// In its simplest form,, a Component is just a function that returns jsx
// props = properties passed in (properties of components)
const person = (props) => {
    // when using class-based components, it's "this.props"!!

    return (
        // want to also display children (bwtween opning and closign HTML tags)
        // <div className="Person" style={style}>
        // <StyleDiv>
        <div className={classes.Person}>
            < p onClick={props.click} > I'm {props.name} and I am {props.age}!</p>
            < p > {props.children}</p >
            {/* Working 2-way binding but there is a better way */}
            < input type="text" onChange={props.changed} value={props.name} />
        </div>
        // </StyleDiv>
        // </div >

    )
};

//export default Radium(person);
export default person;