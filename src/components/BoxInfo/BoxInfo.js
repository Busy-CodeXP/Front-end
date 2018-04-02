import React from 'react';
import ProgressBar from '../ProgressBar'

import './styles/BoxInfo.scss'

const BoxInfo = ({title,count,porcent}) => {
  return (
    <div className="BoxInfo">
      <h3>{title}</h3>
      <p>{count}<span>{porcent && "%"}</span></p>
      <ProgressBar completed = {porcent}/>
    </div>
  );
};

export default BoxInfo;