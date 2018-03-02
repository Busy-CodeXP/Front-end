import React from 'react';

import Logo from '../../images/busyLogo.svg';
import './styles/Logo.scss';

const BusyLogo = () => {
        return (
            <img src={Logo} className='BusyLogo' />
        )
}

export default BusyLogo