import React, { Component } from 'react';


import Button from '../Button';
import DownloadIcon, { AndroidIcon } from './../Icon';
import './styles/About.scss'
import Title from '../Title/Title';

class About extends Component{
  render(){
    return(
      <section className='About'>
        <Title title='Sobre'/>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu justo libero. Vivamus imperdiet erat lectus, sed sodales metus interdum blandit. Proin et tortor vitae mi mollis ultrices nec vitae magna. Phasellus et ultrices nulla. Proin eget massa non libero rhoncus mattis sed vitae ipsum. Praesent commodo neque non lacus tempor, quis posuere mi dignissim. Vivamus non ultricies lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sed tempor metus. Fusce sit amet turpis purus.
        </p>
        <p>
          Nunc vitae ante sed velit semper aliquet. Proin sed tincidunt dui. Suspendisse sem dui, consectetur sit amet nibh ut, condimentum eleifend dui. In sodales purus quis urna laoreet, non mollis sem vulputate. Aliquam placerat, arcu at eleifend aliquam, dolor lorem scelerisque massa, ac ultrices metus dolor quis velit. Maecenas et tristique nisl, vitae malesuada turpis. Suspendisse vel sodales tortor. Donec blandit bibendum dolor in dignissim. Proin nec rhoncus erat. Sed tincidunt, diam vel elementum placerat, lacus tellus mattis dui, sit amet rhoncus dolor lectus quis augue. Vestibulum lacinia facilisis tempor. Vivamus elit turpis, dictum ac sodales in, sollicitudin ut nunc. Vivamus condimentum molestie pretium. Curabitur eget bibendum massa.
        </p>

        <Button className="googlePlay">
          <AndroidIcon fill='#283033' />
          <p>Available on the <br /> <span>Google Play</span></p>
        </Button>

      </section>
    )
  }
}

export default About;