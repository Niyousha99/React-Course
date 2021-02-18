import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Your username is:</p>
            <p>{props.username}</p>
        </div>
    )

};

export default UserOutput;