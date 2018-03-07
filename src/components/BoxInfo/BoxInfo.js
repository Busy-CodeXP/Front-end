import React from 'react';
import ProgressBar from '../ProgressBar'

import './styles/BoxInfo.scss'

const BoxInfo = ({title,count}) => {
  return (
    <div className="BoxInfo">
      <h3>{title}</h3>
      <p>{count}<span>%</span></p>
      <ProgressBar completed = '100'/>
    </div>
  );
};

export default BoxInfo;