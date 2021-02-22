import React, { useState } from 'react';
import './Oatmeal.css'
import OatmealPic from './OatmealPic/OatmealPic'

import oatmeal_0 from './images/oatmeal_0.jpg'
import oatmeal_1 from './images/oatmeal_1.jpg'
import oatmeal_2 from './images/oatmeal_2.jpg'
import oatmeal_3 from './images/oatmeal_3.jpg'
import oatmeal_4 from './images/oatmeal_4.jpg'
import oatmeal_5 from './images/oatmeal_5.jpg'

const Oatmeal = (props) => {

    const [display, setDisplay] = useState(false);

    const oatmealAlts = {
        "oatmeal_0": oatmeal_0,
        "oatmeal_1": oatmeal_1,
        "oatmeal_2": oatmeal_2,
        "oatmeal_3": oatmeal_3,
        "oatmeal_4": oatmeal_4,
        "oatmeal_5": oatmeal_5
    }

    const recipes = {
        "recipe_0": "oats (50g), almond milk (250ml), banana (1), strawberry (40g), blueberry (30g), shredded dark chocolate (5g)",
        "recipe_1": "oats (50g), coconut milk (250ml), grated coconut (15g), banana(1/2), date syrup (15g), sour cherries (10g)",
        "recipe_2": "oats (50g), almond milk (150ml), banana (1), egg (1), walnuts (15g), goji berries (10g)",
        "recipe_3": "oats (50g), almond milk (250ml), banana (1), cocoa powder (1 tsp), cherry sauce (20g), walnuts (10g), shredded dark chocolate (5g), shredded coconut (5g)",
        "recipe_4": "oats (50g), almond milk (150ml), banana (1), pumpkin seeds (10g), chia seeds (1tbsp), flax seeds (1tbsp), goji berries (5g), rasberries (10g)",
        "recipe_5": "oats (50g), almond milk (150ml), egg(1), pear (1/2), almonds (10g), goji berries (10g)"
    }

    return (
        <section className="OatmealSection">
            {
                props.oatmeals.map((oatmeal, i) => {
                    return (
                        <div className="OatmealCard">
                            <OatmealPic imgSrc={oatmealAlts[`oatmeal_${i}`]} imgKey={i} />
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