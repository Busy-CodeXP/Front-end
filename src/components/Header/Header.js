import React, { Component } from 'react';
import { Link } from 'react-router-dom'


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

        return (
            <header className='Header' style={styles.bgColor}>
                {this.props.logo ?
                    <div className='Logo-container'>
                        <Logo />
                        <h1>BUSY</h1>
                    </div> :
                    <div className='Logo-container'>
                        <Logo />
                    </div>
                }
                <Navbar>
                    <li><Link to='#'>Home</Link></li>
                    <li><Link to='#'>Sobre</Link></li>
                    <li><Link to='#'>Funcionalidades</Link></li>
                    <li><Link to='#'>Download</Link></li>
                    <li><Link to='#'>Contato</Link></li>
                </Navbar>
            </header>
        )
    }
}

export default Header