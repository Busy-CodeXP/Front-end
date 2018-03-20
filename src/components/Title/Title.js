import React from 'react';

import './styles/Title.scss';


function Title(props) {
  const {title, className} = props;

  return (
    <h2 className={className}>
      { title }
      <hr/>
    </h2>
  )
}


Title.defaultProps = {
  className: 'Title',
}

export default Title;