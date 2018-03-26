import React, { Component, Fragment } from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import Features2 from '../../components/Features2/Features2';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

import './styles/Home.scss';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Features />
        <About />
        <Features2 />
        <HowItWorks/>
        <Contact/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;
