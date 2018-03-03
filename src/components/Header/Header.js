import React, { Component } from 'react';

import Logo from '../../components/Logo'
import Navbar from '../../components/Navbar';
import './styles/Header.scss';

class Header extends Component {
    render() {
        return (
            <header className='Header'>
                <div className='Logo-container'>
                    <Logo />
                    <h1>BUSY</h1>
                </div>
                <Navbar />
            </header>
        )
    }
}

export default Header