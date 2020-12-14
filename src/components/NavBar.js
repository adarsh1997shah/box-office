import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
    { to: './', text: 'Home' },
    { to: '/starred', text: 'Starred' },
];

const NavBar = () => {
    return (
        <div>
            <ul>
                {LINKS.map(link => {
                    return (
                        <li>
                            <Link to={link.to}>{link.text}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavBar;
