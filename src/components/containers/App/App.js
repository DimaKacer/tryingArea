import React from 'react';
import Header from './../../modules/Header'
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <strong>src/App.js</strong> and save to reload.
        </p>
      </div>
    );
  }
}
