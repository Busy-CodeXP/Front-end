import React, { Component } from 'react';


import Button from '../Button';
import { AndroidIcon } from './../Icon';
import './styles/About.scss'
import Title from '../Title/Title';
import iPhoneX from '../../images/iPhoneX.png'

class About extends Component {
  render() {
    return (
      <div className="About-container">
        <section className='About' id='About'>
          <Title title='Sobre' />

          <p className='text'>
            O transporte público é certamente uma das principais soluções para o caos da mobilidade urbana em nosso país. No caso dos ônibus, é solução porque é um meio de transporte mais barato e ajuda desafogando as vias em nossas cidades. Em São Paulo por exemplo, um ônibus transporta em média 48 passageiros por viagem, o que equivale a 40 carros ou 48 bicicletas – se levarmos em consideração que na cidade a média é de 1,2 pessoa por carro.
          </p>
          <ul className='text'>
            Vale destacar que:
            <li>1 ônibus ocupa 50 metros quadrados</li>
            <li>48 bicicletas ocupam 92 metros quadrados</li>
            <li>40 carros ocupam 840 metros quadrados</li>
          </ul>
          <p className='text'>
            A superlotação, falta de linhas, constantes atrasos e péssima manutenção formam o cenário real do
            transporte público no Brasil. Não é à toa que 70% das menções referentes a transporte público são negativas,
            evidenciando a falta de estrutura e o descontentamento da população.
          </p>

          <img className='graphic' src="http://via.placeholder.com/200x200" alt="" />

          <p className='text'>
            Entre todas as reclamações voltadas ao transporte público, a lotação dos coletivos é a mais presente, somando um
            total de 57,8% das menções. Logo em seguida, com 23,1%, aparece a demora em embarcar no coletivo,
            principalmente em ônibus.
          </p>
          <p className='text'>
            O Busy app vem com uma proposta de melhorar o conforto do usuário dando a ele a possibilidade de escolha entre os ônibus de acordo com seu nível de lotação. 
          </p>



          <Button className="googlePlay">
            <AndroidIcon fill='#283033' />
            <p>Available on the <br /> <span>Google Play</span></p>
          </Button>
        </section>

        <img src={iPhoneX} style={{objectFit:'contain', margin:'0 50px'}} alt="" />
      </div>
    )
  }
}

export default About;