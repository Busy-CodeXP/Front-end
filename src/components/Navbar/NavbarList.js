import React from 'react';
import { Link } from 'react-router-dom'

const NavbarList = ({ children, link }) => {
  if (link) {
    return (
      <li>
        <Link to={link}>
          {children}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        {children}
      </li>
    );
  }
};

export default NavbarList;