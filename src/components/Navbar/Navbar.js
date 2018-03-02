import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './styles/Navbar.scss';

class Navbar extends Component{
    render(){
        return(
            <nav className='Navbar'>
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