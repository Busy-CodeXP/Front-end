import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Button.scss'

function Button(props) {
  const { href, children, className, ...otherProps } = props;
  const classes = `Button ${className}`;

  if (href) {
    return (
      <Link {...otherProps} to={href} className={classes}>
        { children }
      </Link>
    );
  }

  return (
    <button {...otherProps} className={classes}>
      { children }
    </button>
  )
}


Button.defaultProps = {
  href: '',
  className: '',
}

export default Button;