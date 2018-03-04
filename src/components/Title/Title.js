import React from 'react';

import './styles/Title.scss';


function Title(props) {
  const {children, className} = props;
  const classes = 'Title';

  return (
    <h1 className={classes}>
      { children }
      <hr/>
    </h1>
  )
}


Title.defaultProps = {
  href: '',
  className: '',
}

export default Title;