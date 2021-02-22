import React, { useState } from 'react';
import './OatmealPic.css'


const OatmealPic = (props) => {
    const imgStyle = {
        width: "100%",
        height: "500px",
    };

    return (
        <img src={props.imgSrc} key={props.imgKey} style={imgStyle} />
    )
};

export default OatmealPic;