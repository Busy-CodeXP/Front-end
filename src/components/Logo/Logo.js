import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../images/busyLogo.svg';
import './styles/Logo.scss';

const BusyLogo = () => {
        return (
            <Link to='/Front-end/'><img src={Logo} className='BusyLogo' alt="Logo" /></Link>
        )
}

export default BusyLogo