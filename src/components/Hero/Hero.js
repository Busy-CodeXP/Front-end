import React, {Component} from 'react';

import Header from '../Header/Header';
import './styles/Hero.scss';

class Hero extends Component{
    render(){
        return(
            <section className='Hero'>
              <Header/>
            </section>
        )
    }
}

export default Hero