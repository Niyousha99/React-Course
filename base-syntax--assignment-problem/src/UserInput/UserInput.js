import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <label>Please enter your username:
                <input type="text" id="input" onChange={props.changed} value={props.username} />
            </label>

        </div>
    )

};

export default UserInput;