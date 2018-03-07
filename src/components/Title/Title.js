import React from 'react';

import './styles/Title.scss';


function Title(props) {
  const {title, className} = props;

  return (
    <h1 className={className}>
      { title }
      <hr/>
    </h1>
  )
}


Title.defaultProps = {
  className: 'Title',
}

export default Title;