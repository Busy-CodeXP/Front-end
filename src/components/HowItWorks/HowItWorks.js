import React, { Component } from 'react';

import Title from '../Title';
import CardInfo from '../CardInfo/CardInfo';
import './styles/HowItWorks.scss'

class HowItWorks extends Component {
  render() {
    return (
      <section className='HowItWorks'>

        <Title title="Como Funciona" />

        <div className="HowItWorks-container">
          <div className="HowItWorks-inner">
            <div className="HowItWorks-inner-description">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa dolorem aliquid sequi modi magni veniam doloribus omnis autem asperiores?</p>
            </div>

            <div className="HowItWorks-inner-CardInfo">
              <CardInfo
                inverse='inverse'
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
                image="http://via.placeholder.com/60x60"
              />
              <CardInfo
                inverse='inverse'
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
                image="http://via.placeholder.com/60x60"
              />
              <CardInfo
                inverse='inverse'
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
                image="http://via.placeholder.com/60x60"
              />
            </div>
          </div>

          <img className='image' src="http://via.placeholder.com/350x500" alt="" />
        </div>

      </section>
    )
  }
}

export default HowItWorks;