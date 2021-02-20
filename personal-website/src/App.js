import React, { Component } from 'react';
import './App.css';
import Oatmeal from './Oatmeal/Oatmeal';

class App extends Component {
  state = {
    oatmealInfo: [
      { name: "Strawberry Delight", imageName: "oatmeal_0" },
      { name: "Syrupy Coconut", imageName: "oatmeal_1" },
      { name: "Banana Cinnamon", imageName: "oatmeal_2" },
      { name: "Choco Berry", imageName: "oatmeal_3" },
      { name: "Berry Seed Mountain", imageName: "oatmeal_4" },
      { name: "Perfect Pear", imageName: "oatmeal_5" },
    ]
  }

  render() {

    return (
      <div className="App">

        <nav>Niyousha's Oatmeals</nav>

        <Oatmeal
          oatmeals={this.state.oatmealInfo} />

        <div className="Footnote" />

      </div>
    );
  }
}

export default App; 
