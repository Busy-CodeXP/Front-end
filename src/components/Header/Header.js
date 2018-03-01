import React, {Component} from 'react';
import './styles/Header.scss';
import Logo from '../../components/Logo'

class Header extends Component{
    render(){
        return(
            <header className='Header'>
                <Logo/>
            </header>
        )
    }
}

export default Header