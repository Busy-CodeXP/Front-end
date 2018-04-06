import React from 'react';

import './styles/BoxFeature.scss'

const BoxFeature = ({title,image,description}) => {
  return (
    <div className="BoxFeature">
      <img src={image} alt="Imagem do BoxFeature" style={{width:'130px',height:'130px'}} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BoxFeature;