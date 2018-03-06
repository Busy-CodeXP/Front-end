import React from 'react';

import './styles/Card.scss'

const Card = ({title,image,description}) => {
  return (
    <div className="Card">
      <img src={image} alt="Imagem do card" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;