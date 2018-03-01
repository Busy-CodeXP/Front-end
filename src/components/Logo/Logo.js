import React, { Component } from 'react';
import './styles/Logo.scss';
import Logo from '../../images/busyLogo.svg';

class BusyLogo extends Component {
    render() {
        return (
            <img src={Logo} className='BusyLogo' />
        )
    }
}

export default BusyLogo