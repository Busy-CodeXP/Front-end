import React, { Component } from 'react';

import Logo from '../../components/Logo'
import Navbar from '../../components/Navbar';
import './styles/Header.scss';

class Header extends Component {
  render() {
    const styles = {
      bgColor: {
        background: this.props.background,
      }
    }

    const {titleLogo,children} = this.props
    return (
      <header className='Header' style={styles.bgColor}>
        {titleLogo ?
          <div className='Logo-container'>
            <Logo />
            <h1>{titleLogo}</h1>
          </div> :
          <div className='Logo-container'>
            <Logo />
          </div>
        }
        <Navbar>
          {children}
        </Navbar>
      </header>
    )
  }
}

export default Header