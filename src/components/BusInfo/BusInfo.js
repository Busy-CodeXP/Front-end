import React from 'react';

import './styles/BusInfo.scss'

const BusInfo = ({ linha, trajeto }) => {
  return (
    <div className='BusInfo'>
      <p>{linha}</p>
      <p>{trajeto}</p>
    </div>
  );
};

export default BusInfo;