import React from 'react';
import BeverageButton from './BeverageButton';
import CoffeeImg from './img/icons8-kawaii-coffee-100.png';
import TeaImg from './img/icons8-hot-beverage-100.png';
import CokeImg from './img/icons8-cola-100.png';
import BeerImg from './img/icons8-beer-glass-100.png';

function App() {
  return (
    <div className="App">
      <div className="center">
        <h1>DemoTask</h1>
        <div className="row">
          <div className="col s12 m4 l6">
          </div>
        </div>
        <div className="row">

          <div className="col s12 m4 l6"> <BeverageButton beverageImg={CoffeeImg} beverageType="coffee" /></div>
          <div className="col s12 m4 l6"><BeverageButton beverageImg={TeaImg} beverageType="tea" /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
