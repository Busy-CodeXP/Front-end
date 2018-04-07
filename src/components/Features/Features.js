import React, { Component } from 'react';

import Title from '../Title';
import BoxFeature from '../BoxFeature';
import rating from '../../images/rating.svg';
import people from '../../images/people.svg';
import disabled from '../../images/disabled.svg';
import deited from '../../images/deited.png';

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
            image={people}
          />
          <BoxFeature
            title="Feedback"
            description="Envie-nos um feedback sobre sua experiência em suas viagens ou no uso do app."
            image={rating}
          />
          <BoxFeature
            title="Acessibilidade"
            description="Com nosso aplicativo é possível saber se o ônibus possui acessibilidade ou não."
            image={disabled}
          />
        </div>

        <img className='image' src={deited} style={{width:'700px'}} alt=""/>
      </section>
    )
  }
}

export default Features;