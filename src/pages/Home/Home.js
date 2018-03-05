import React, { Component, Fragment } from 'react';
import Hero from '../../components/Hero';
import './styles/Home.scss';
import Features from '../../components/Features/Features';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Features />
      </Fragment>
    );
  }
}

export default Home;
