
import './App.css';
import './App.scss';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';

export default class App extends Component {
   
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
