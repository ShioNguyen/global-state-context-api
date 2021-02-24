import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="l-header">
            <div className="nav l-container">
                <Link to='/' className="nav__logo">Library</Link>

                <div className="nav__menu">
                    <ul className="nav__list">

                        <li className="nav__item">
                            <Link to='/' className="nav__link">Readlist</Link>
                        </li>

                        <li className="nav__item">
                            <Link to='/read' className="nav__link">Read</Link>
                        </li>

                        <li className="nav__item">
                            <Link to='/add' className="nav__link">Add book</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
