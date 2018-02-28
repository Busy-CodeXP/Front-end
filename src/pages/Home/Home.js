import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import Button from '../../components/Button/Button';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to React</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <Button/>
      </div>
    );
  }
}

export default Home;
