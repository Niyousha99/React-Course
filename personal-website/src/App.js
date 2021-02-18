import React, { Component } from 'react';
import './App.css';
import './Oatmeal/Oatmeal';
import oatmeal_1 from './images/oatmeal_1.jpg';
import oatmeal_2 from './images/oatmeal_2.jpg';
import oatmeal_3 from './images/oatmeal_3.jpg';
import oatmeal_4 from './images/oatmeal_4.jpg';
import oatmeal_5 from './images/oatmeal_5.jpg';
import oatmeal_6 from './images/oatmeal_6.jpg';

class App extends Component {
  state = {
    oatmealBowls: [
      { name: "Strawberry Delight", img: "oatmeal_1" },
      { name: "Fire and Water", img: "oatmeal_2" },
      { name: "Banana Cinnamon", img: "oatmeal_3" },
      { name: "Chocolate Chip Berry", img: "oatmeal_4" },
      { name: "Berry Seed Mountain", img: "oatmeal_5" },
      { name: "Perfect Pear", img: "oatmeal_6" },
    ]
  }

  render() {

    return (
      <div className="App">

        <nav>Niyousha's Oatmeals</nav>

        <div className="buttDiv">
          <button
            className="mainButton">OATMEAL</button>
        </div>

        <section className="images">
          <img src={oatmeal_1}></img>
          <img src={oatmeal_2}></img>
          <img src={oatmeal_3}></img>

          <img src={oatmeal_4}></img>
          <img src={oatmeal_5}></img>
          <img src={oatmeal_6}></img>

        </section>
      </div>
    );
  }
}

export default App; 
