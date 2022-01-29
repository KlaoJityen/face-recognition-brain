import React, {Component} from 'react'
import './App.css';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import Particle from './Components/Particle/Particle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particle />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
