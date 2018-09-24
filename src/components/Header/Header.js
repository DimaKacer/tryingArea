import React from 'react'
import Logo from './../Logo'
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )
  }
}