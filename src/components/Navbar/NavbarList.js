import React from 'react';
import { Link } from 'react-router-dom'

const NavbarList = ({ children, link, className }) => {
  if (link) {
    return (
      <li className={className}>
        <Link to={link}>
          {children}
        </Link>
      </li>
    );
  } else {
    return (
      <li className={className}>
        {children}
      </li>
    );
  }
};

export default NavbarList;