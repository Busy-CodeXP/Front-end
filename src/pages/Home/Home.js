import React, { Component, Fragment } from 'react';
import Hero from '../../components/Hero';
import './styles/Home.scss';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Features />
        <About />
      </Fragment>
    );
  }
}

export default Home;
