import React, { Component } from 'react';

import Title from '../Title';
import BoxFeature from '../BoxFeature';
import './styles/Features.scss'

class Features extends Component {
  render() {
    return (
      <section className='Features' id='Features'>

        <Title title="Funcionalidades" />
      
        <div className="Features-BoxFeatures">
          <BoxFeature
            title="Lotação"
            description="Informar a estimativa de lotação do próximo ônibus da linha que chegará mais rápido ao ponto de ônibus."
            image="http://via.placeholder.com/130x130"
          />
          <BoxFeature
            title="Feedback"
            description="Envie-nos um feedback sobre sua experiência em suas viagens ou no uso do app."
            image="http://via.placeholder.com/130x130"
          />
          <BoxFeature
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/130x130"
          />
        </div>

        <img className='image' src="http://via.placeholder.com/500x130" alt=""/>
      </section>
    )
  }
}

export default Features;