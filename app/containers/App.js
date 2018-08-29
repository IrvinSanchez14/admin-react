import React, { Component } from 'react';
import Button from '../components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          id="irv" 
          text="hola"
          type="button"
          texto="alt" 
        />
      </div>
    );
  }
}

export default App;
