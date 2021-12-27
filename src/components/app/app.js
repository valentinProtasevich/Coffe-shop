import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import AppGoodsAbout from '../app-goods-about/app-goods-about';
import CoffeeCardsList from '../coffe-cards-list/coffe-cards-list';
import AppFooter from '../app-footer/app-footer';

import carraro from '../coffe-cards-list/carraro.png';
import juliusMeinl from '../coffe-cards-list/julius meinl.jpg';
import jardin from '../coffe-cards-list/jardin.jpg';
import paulig from '../coffe-cards-list/paulig.jpg';
import lavazza from '../coffe-cards-list/lavazza.png';
import nescafe from '../coffe-cards-list/nescafe.jpg';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [
        {img: {carraro}, name: 'Carraro', from: 'Italy', price: 6.99, id: 1},
        {img: {juliusMeinl}, name: 'Julius Meinl', from: 'Austria', price: 8.99, id: 2},
        {img: {jardin}, name: 'Jardin', from: 'Switzerland', price: 5.99, id: 3},
        {img: {paulig}, name: 'Paulig', from: 'Finland', price: 10.99, id: 4},
        {img: {lavazza}, name: 'Lavazza', from: 'Italy', price: 12.99, id: 5},
        {img: {nescafe}, name: 'Nescafe', from: 'Russia', price: 15.99, id: 6},
      ]
    }
  }

  render() {
    return(
      <div className='app'>
        <AppHeader/>
        <AppGoodsAbout/>
        <CoffeeCardsList data={this.state.data}/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;