import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Button from '../Button';
import Header from '../Header';
import DownloadIcon from './../Icon';
import './styles/Hero.scss';
import splash from'../../images/splash.png'
class Hero extends Component {

  closeMenu = () => {
    if (this.header) {
      this.header.getNavbar().closeMenu()
    }
  }

  render() {
    const nav = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width='40px' height='40px'>
      <g>
        <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" fill="#FFFFFF" />
        <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" fill="#FFFFFF" />
        <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" fill="#FFFFFF" />
      </g>
    </svg>

    return (
      <section className='Hero'>
        <Header ref={(header) => this.header = header} titleLogo='BUSY' burger={nav}>
          <Link to='/Front-end/dashboard'>Dashboard</Link>
          <a href='#Features' onClick={this.closeMenu}>Funcionalidades</a>
          <a href='#About' onClick={this.closeMenu}>Sobre</a>
          <a href='#HowItWorks' onClick={this.closeMenu}>Como Funciona</a>
          <a href='#Contact' onClick={this.closeMenu}>Contato</a>
          <a href='#Download' onClick={this.closeMenu}>Download</a>
        </Header>

        <div className="slogan-container">
          <div className="slogan">
            <h1 className="title">Busy</h1>
            <h2 className="subTitle">Mais comodidade às suas viagens</h2>
            <p>Mude a forma de se transportar em Sampa. Otimize suas rotas e tenha mais conforto. Com o nosso aplicativo, a espera por ônibus se torna mais atraente.</p>

            <div className="buttons">
              <a style={{textDecoration:'none'}} href='https://drive.google.com/uc?id=17YXbLinHvHMmreER2M1PEtCsYHWh9fOj&export=download'> 
              <Button className='default'>
                <DownloadIcon fill='#FFF' /> DOWNLOAD
              </Button>
              </a>

              <a href='#About' className='Button'>LEARN MORE</a>
            </div>
          </div>

          <img src={splash} style={{width:'350px'}} alt='Splash screen do celular' />

        </div>

      </section>
    )
  }
}

export default Hero