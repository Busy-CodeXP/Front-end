import React from 'react';

import Logo from '../../images/busyLogo.svg';
import './styles/Logo.scss';

const BusyLogo = () => {
        return (
            <img src={Logo} className='BusyLogo' alt="Logo" />
        )
}

export default BusyLogo