import React, { Component } from 'react';

import Button from '../Button';
import Header from '../Header';
import DownloadIcon, { AndroidIcon } from './../Icon';
import './styles/Hero.scss';

class Hero extends Component {
  render() {
    return (
      <section className='Hero'>
        <Header />

        <Button className='default'>
          <DownloadIcon fill='#FFF' /> Download
        </Button>

        <Button>LEARN MORE</Button>

        <Button className="about">
          <AndroidIcon fill="#FFF" />
          Available on the <br /> Google Play
        </Button>

      </section>
    )
  }
}

export default Hero