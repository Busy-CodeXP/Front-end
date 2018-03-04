import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './styles/Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className='Navbar'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <g>
                        <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" fill="#FFFFFF" />
                        <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" fill="#FFFFFF" />
                        <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" fill="#FFFFFF" />
                    </g>
                </svg>

                <ul className='Navbar-list'>
                    <li><Link to='#'>Home</Link></li>
                    <li><Link to='#'>Funcionalidades</Link></li>
                    <li><Link to='#'>Download</Link></li>
                    <li><Link to='#'>Contato</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar