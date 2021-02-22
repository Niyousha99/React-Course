import React from 'react';
import './ValidationComponent.css'

const ValidationComponent = (props) => {
    let validationMessage = "Text long enough!";
    if (props.length < 5) validationMessage = "text too short";

    return (
        <div>
            {validationMessage}
        </div>
    )
};

export default ValidationComponent;