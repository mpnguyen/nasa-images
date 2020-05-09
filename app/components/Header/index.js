/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './header.scss';

function Header({ pathname }) {
  return (
    <header>
      <div className="nav-items">
        <Link className={classNames({ active: pathname === '/' })} to="/">
          All
        </Link>
        <Link
          className={classNames({ active: pathname === '/liked' })}
          to="/liked"
        >
          Liked
        </Link>
        <Link
          className={classNames({ active: pathname === '/removed' })}
          to="/removed"
        >
          Removed
        </Link>
      </div>

      <span className="title">Nasa image</span>
    </header>
  );
}

Header.propTypes = {
  pathname: PropTypes.string,
};

export default Header;
