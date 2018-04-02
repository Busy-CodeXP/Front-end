import React, { Component } from 'react';

import './styles/Footer.scss';
import Title from '../Title';
import Button from '../Button';
import DownloadIcon, { AndroidIcon } from './../Icon';


class Footer extends Component {
  render() {
    return (
      <footer className='Download' id='Download'>
          <Title title='Baixe agora' />
          <p>Baixe agora o Busy app e acabe com o desconforto nos ônibus.</p>
          <Button className="googlePlay">
            <AndroidIcon fill='#283033' />
            <p>Available on the <br /> <span>Google Play</span></p>
          </Button>
        <span className='copyright'>&copy; Copyright 2018 Busy</span>
      </footer>
    )
  }
}

export default Footer;