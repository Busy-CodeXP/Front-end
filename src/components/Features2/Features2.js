import React, { Component } from 'react';

import Title from '../Title';
import CardInfo from '../CardInfo/CardInfo';
import './styles/Features2.scss'

class Features2 extends Component {
  render() {
    return (
      <section className='Features2'>

        <Title title="Mais Funcionalidades" />

        <div className="Features2-description">
          <p>Funcionalidades previstas para implementar o Busy app futuramente.</p>
        </div>

        <div className="Features2-CardInfo-container">
          <div className="Features2-CardInfo">
            <CardInfo
              title="Melhores rotas"
              description="Escolhe automaticamente as melhores rotas para o seu destino otimizando seu percurso"
              image="http://via.placeholder.com/70x70"
            />
            <CardInfo
              title="Anti pânico"
              description="Recurso que permite ao usuário a identificação de situações de risco com a câmera de seu aparelho celular."
              image="http://via.placeholder.com/70x70"
            />
            <CardInfo
              title="Alertas"
              description="Sistema inteligente que alerta os usuários sobre greves, vias interditadas e da a possibilidade de caminhos alternativos."
              image="http://via.placeholder.com/70x70"
            />
          </div>

          <img className='image' src="http://via.placeholder.com/250x450" alt="" />

          <div className="Features2-CardInfo">
            <CardInfo
              inverse='inverse'
              title="Recarga e consulta"
              description="Sistema de recarga e consulta de saldo, evitando filas e atrasos."
              image="http://via.placeholder.com/70x70"
            />
            <CardInfo
              inverse='inverse'
              title="ChatBot"
              description="Tire suas dúvidas e nos ajude a melhorar enviando seu feedback em relação a nosso app"
              image="http://via.placeholder.com/70x70"
            />
            <CardInfo
              inverse='inverse'
              title="Acessibilidade"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
              image="http://via.placeholder.com/70x70"
            />
          </div>
        </div>

      </section>
    )
  }
}

export default Features2;