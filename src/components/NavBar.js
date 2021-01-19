import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavList, LinkStyled } from '../styles/nav.styled';
//import {NavList} from '../styles/nav.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <NavList>
        {LINKS.map((link, index) => {
          return (
            <li key={index}>
              <LinkStyled
                to={link.to}
                className={link.to === pathname ? 'active' : ''}
              >
                {link.text}
              </LinkStyled>
            </li>
          );
        })}
      </NavList>
    </div>
  );
};

export default NavBar;
