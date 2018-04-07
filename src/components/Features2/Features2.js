import React, { Component } from 'react';

import Title from '../Title';
import CardInfo from '../CardInfo/CardInfo';
import route from '../../images/route.svg'
import notification from '../../images/notification.svg'
import danger from '../../images/danger.svg'
import card from '../../images/card.svg'
import robot from '../../images/robot.svg'
import wheelchair from '../../images/wheelchair.svg'
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
              image={route}
            />
            <CardInfo
              title="Anti pânico"
              description="Recurso que permite ao usuário a identificação de situações de risco com a câmera de seu aparelho celular."
              image={danger}
            />
            <CardInfo
              title="Notificações"
              description="Sistema inteligente que alerta os usuários sobre greves, vias interditadas e da a possibilidade de caminhos alternativos."
              image={notification}
            />
          </div>

          <img className='image' src="http://via.placeholder.com/250x450" alt="" />

          <div className="Features2-CardInfo">
            <CardInfo
              inverse='inverse'
              title="Recarga e consulta"
              description="Sistema de recarga e consulta de saldo, evitando filas e atrasos."
              image={card}
            />
            <CardInfo
              inverse='inverse'
              title="ChatBot"
              description="Tire suas dúvidas e nos ajude a melhorar enviando seu feedback em relação a nosso app"
              image={robot}
            />
            <CardInfo
              inverse='inverse'
              title="Acessibilidade"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
              image={wheelchair}
            />
          </div>
        </div>

      </section>
    )
  }
}

export default Features2;