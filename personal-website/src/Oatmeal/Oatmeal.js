import React, { useState } from 'react';
import './Oatmeal.css'

import oatmeal_0 from './images/oatmeal_0.jpg'
import oatmeal_1 from './images/oatmeal_1.jpg'
import oatmeal_2 from './images/oatmeal_2.jpg'
import oatmeal_3 from './images/oatmeal_3.jpg'
import oatmeal_4 from './images/oatmeal_4.jpg'
import oatmeal_5 from './images/oatmeal_5.jpg'

import recipe_0 from './recipes/recipe_0.txt'
import recipe_1 from './recipes/recipe_1.txt'
import recipe_2 from './recipes/recipe_2.txt'
import recipe_3 from './recipes/recipe_3.txt'
import recipe_4 from './recipes/recipe_4.txt'
import recipe_5 from './recipes/recipe_5.txt'

const Oatmeal = (props) => {

    const [display, setDisplay] = useState(false);

    let oatmealAlts = {
        "oatmeal_0": oatmeal_0,
        "oatmeal_1": oatmeal_1,
        "oatmeal_2": oatmeal_2,
        "oatmeal_3": oatmeal_3,
        "oatmeal_4": oatmeal_4,
        "oatmeal_5": oatmeal_5
    }

    let recipes = {
        "recipe_0": recipe_0,
        "recipe_1": recipe_1,
        "recipe_2": recipe_2,
        "recipe_3": recipe_3,
        "recipe_4": recipe_4,
        "recipe_5": recipe_5
    }

    const imgStyle = {
        width: "100%",
        height: "500px",
    };

    return (
        <section className="OatmealSection">
            {
                props.oatmeals.map((oatmeal, i) => {
                    return (
                        <div className="OatmealCard">
                            <img src={oatmealAlts[`oatmeal_${i}`]} key={i} style={imgStyle} />
                            {/* {display && <p className="recipe">{recipes[fetch(`recipe_${i}`)]}</p>} */}

                            <button
                                onClick={() => {
                                    //   setDisplay(true);
                                }}
                                className="OatmealButton">{oatmeal.name}</button>
                        </div>

                    );
                })
            }

        </section>

    )
};

export default Oatmeal;