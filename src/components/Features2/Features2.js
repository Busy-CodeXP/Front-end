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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa dolorem aliquid sequi modi magni veniam doloribus omnis autem asperiores? Non maxime obcaecati earum sit eius voluptatibus dolore dignissimos itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="Features2-CardInfo">
          <CardInfo className='CardInfo'
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/70x70"
          />
          <CardInfo className='CardInfo'
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/70x70"
          />
          <CardInfo className='CardInfo'
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/70x70"
          />

          <img className='image' src="http://via.placeholder.com/250x500" alt=""/>

           <CardInfo className='CardInfo inverse'
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/70x70"
          />
          <CardInfo className='CardInfo inverse'
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/70x70"
          />
          <CardInfo className='CardInfo inverse'
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/70x70"
          />
        </div>

      </section>
    )
  }
}

export default Features2;