import React from 'react';

import './styles/CardInfo.scss'

const CardInfo = ({title,image,description, className, inverse}) => {
  return (
    <div className={`${className} ${inverse}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='boxCircle'><img src={image} alt="Imagem do CardInfo" /></div>
    </div>
  );

  
};
    CardInfo.defaultProps = {
      className: 'CardInfo',
    }

export default CardInfo;