import React, { Component } from 'react';

import Title from '../Title';
import Card from '../Card';
import './styles/Features.scss'

class Features extends Component {
  render() {
    return (
      <section className='Features'>

        <Title title="Funcionalidades" />
      
        <div className="Features-cards">
          <Card
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/130x130"
          />
          <Card
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/130x130"
          />
          <Card
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor."
            image="http://via.placeholder.com/130x130"
          />
        </div>
      </section>
    )
  }
}

export default Features;