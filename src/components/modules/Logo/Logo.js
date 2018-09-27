import React from 'react'
import logo from './logo.svg';
import './Logo.css'

export class Logo extends React.Component {
  render() {
    return (
      <img src={logo} className="Logo-app" alt="logo"/>
    )
  }
}