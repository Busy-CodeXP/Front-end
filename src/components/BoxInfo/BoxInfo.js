import React from 'react';

import './styles/BoxInfo.scss'

const BoxInfo = ({title,count}) => {
  return (
    <div className="BoxInfo">
      <h3>{title}</h3>
      <div className='progressBar'></div>
      <p>{count}<span>%</span></p>
    </div>
  );
};

export default BoxInfo;