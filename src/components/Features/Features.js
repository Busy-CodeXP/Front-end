import React, { Component } from 'react';

import './styles/Features.scss'
import Title from '../Title/Title';

class Features extends Component{
  render(){
    return(
      <section className='Features'>
        <Title>
          Funcionalidades
        </Title>

        <div className="Feature-box">
          <img src="http://via.placeholder.com/130x130" alt=""/>
          <h3>Lorem ipsum dolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem et nibh accumsan auctor.</p>
        </div>
      </section>
    )
  }
}

export default Features;