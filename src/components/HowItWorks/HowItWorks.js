import React, { Component } from 'react';

import Title from '../Title';
import CardInfo from '../CardInfo/CardInfo';
import layers from '../../images/layers.png'
import search from '../../images/search.svg';
import list from '../../images/list.svg';
import favorites from '../../images/favorites.svg';

import './styles/HowItWorks.scss'

class HowItWorks extends Component {
  render() {
    return (
      <section className='HowItWorks' id='HowItWorks'>

        <Title title="Como Funciona" />

        <div className="HowItWorks-container">
          <div className="HowItWorks-inner">
            <div className="HowItWorks-inner-description">
              <h3>Veja como funciona</h3>
              <p>Aqui temos um pequeno resumo das funcionalidades principais do nosso App</p>
            </div>

            <div className="HowItWorks-inner-CardInfo">
              <CardInfo
                inverse='inverse'
                title="Procure"
                description="Faça a busca da linha de seu ônibus em tempo real, sabendo a lotação e quais veiculos estão em circulação na linha."
                image={search}
              />
              <CardInfo
                inverse='inverse'
                title="Liste"
                description="Listando as linhas iremos apresentar todos os ônibus que estão rodando naquela linha até o momento."
                image={list}
              />
              <CardInfo
                inverse='inverse'
                title="Avalie"
                description="Seu feedback sobre o transporte é muito importante para nós, avalie para podermos reportar essas informações."
                image={favorites}
              />
            </div>
          </div>

          <img className='image' src={layers} alt="" />
        </div>

      </section>
    )
  }
}

export default HowItWorks;