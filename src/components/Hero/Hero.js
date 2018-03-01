import React, {Component} from 'react';
import './styles/Hero.scss';
import Header from '../Header/Header';

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