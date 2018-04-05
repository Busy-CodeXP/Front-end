import React from 'react';
import { Link } from 'react-router-dom'

const NavbarList = ({ children, link, onClick, className }) => {
  if (link) {
    return (
      <li onClick={onClick} className={className}>
        <Link to={link}>
          {children}
        </Link>
      </li>
    );
  } else {
    return (
      <li onClick={onClick} className={className}>
        {children}
      </li>
    );
  }
};

export default NavbarList;