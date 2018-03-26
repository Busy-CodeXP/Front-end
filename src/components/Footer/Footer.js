import React, { Component } from 'react';

import './styles/Footer.scss';
import Title from '../Title';
import Button from '../Button';
import DownloadIcon, { AndroidIcon } from './../Icon';


class Footer extends Component {
  render(){
    return(
      <footer className='Footer'>
        <Title title='Baixe agora'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti tempore at ullam</p>
        <Button className="googlePlay">
          <AndroidIcon fill='#283033' />
          <p>Available on the <br /> <span>Google Play</span></p>
        </Button>
      </footer>
    )
  }
}

export default Footer;