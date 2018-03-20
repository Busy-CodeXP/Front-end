import React from 'react';

import './styles/CardInfo.scss'

const CardInfo = ({title,image,description, className}) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt="Imagem do CardInfo" />
    </div>
  );
};

export default CardInfo;