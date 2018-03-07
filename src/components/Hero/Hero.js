import React, { Component } from 'react';

import Button from '../Button';
import Header from '../Header';
import DownloadIcon from './../Icon';
import './styles/Hero.scss';

class Hero extends Component {
  render() {
    return (
      <section className='Hero'>
        <Header/>

        <div className="slogan-container">
          <div className="slogan">
            <h1 className="title">Busy</h1>
            <h2 className="subTitle">Mais comodidade às suas viagens</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac arcu id ante sagittis semper. Suspendisse aliquet, nisi quis iaculis iaculis, est velit porttitor justo, ut blandit est felis dignissim velit.</p>

            <div className="buttons">
              <Button className='default'>
                <DownloadIcon fill='#FFF' /> DOWNLOAD
              </Button>

              <Button>LEARN MORE</Button>
            </div>
          </div>

          <img src="http://via.placeholder.com/300x500" alt='' />

        </div>

      </section>
    )
  }
}

export default Hero