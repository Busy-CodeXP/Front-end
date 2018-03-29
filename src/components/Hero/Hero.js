import React, { Component } from 'react';

import Button from '../Button';
import Header from '../Header';
import { NavbarList } from '../Navbar'
import DownloadIcon from './../Icon';
import './styles/Hero.scss';

class Hero extends Component {
  render() {
    const nav = <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <g>
        <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" fill="#FFFFFF" />
        <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" fill="#FFFFFF" />
        <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" fill="#FFFFFF" />
      </g>
    </svg>

    return (
      <section className='Hero'>
        <Header titleLogo='BUSY' burger={nav}>
          <NavbarList link='#'>Home</NavbarList>
          <NavbarList link='#'>Funcionalidades</NavbarList>
          <NavbarList link='#'>Sobre</NavbarList>
          <NavbarList link='#'>Como Funciona</NavbarList>
          <NavbarList link='#'>Contato</NavbarList>
          <NavbarList link='#'>Download</NavbarList>
        </Header>

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

          <img src="http://via.placeholder.com/250x450" alt='' />

        </div>

      </section>
    )
  }
}

export default Hero