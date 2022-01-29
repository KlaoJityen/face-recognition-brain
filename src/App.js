import React, {Component} from 'react'
import './App.css';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
