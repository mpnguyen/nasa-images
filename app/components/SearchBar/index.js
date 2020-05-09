/**
 *
 * SearchBar
 *
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './search-bar.scss';

function SearchBar({ onSubmit, onChange, text }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input value={text} placeholder="Search ..." onChange={onChange} />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SearchBar;
