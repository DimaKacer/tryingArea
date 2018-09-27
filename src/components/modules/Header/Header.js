import React from 'react'
import Logo from './../Logo'
import './Header.css';

const TITLE_PAGE = 'Welcome to React'

export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <h1 className="App-title">{TITLE_PAGE}</h1>
      </header>
    )
  }
}
