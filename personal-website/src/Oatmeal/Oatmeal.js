import React from 'react';
import oatmeal_0 from './images/oatmeal_0.jpg'
import oatmeal_1 from './images/oatmeal_1.jpg'
import oatmeal_2 from './images/oatmeal_2.jpg'
import oatmeal_3 from './images/oatmeal_3.jpg'
import oatmeal_4 from './images/oatmeal_4.jpg'
import oatmeal_5 from './images/oatmeal_5.jpg'
import './Oatmeal.css'

const Oatmeal = (props) => {

    let oatmealAlts = {
        "oatmeal_0": oatmeal_0,
        "oatmeal_1": oatmeal_1,
        "oatmeal_2": oatmeal_2,
        "oatmeal_3": oatmeal_3,
        "oatmeal_4": oatmeal_4,
        "oatmeal_5": oatmeal_5,
    }

    const imgStyle = {
        width: "30%",
        height: "500px",
        margin: "1rem"
    };

    return (
        <section className="OatmealSection">
            {
                props.oatmeals.map((oatmeal, i) => {
                    return <img src={oatmealAlts[`oatmeal_${i}`]} key={i} style={imgStyle} />;
                })
            }

        </section>

    )
};

export default Oatmeal;