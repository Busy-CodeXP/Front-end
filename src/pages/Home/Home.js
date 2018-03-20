import React, { Component, Fragment } from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import Features2 from '../../components/Features2/Features2';

import './styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Features />
        <About />
        <Features2 />
      </Fragment>
    );
  }
}

export default Home;
