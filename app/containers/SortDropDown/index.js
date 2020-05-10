/**
 *
 * DropDown
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './drop-down.scss';
import { sortItemsRequest } from '../All/actions';

function DropDown({ sortItems, sortBy }) {
  return (
    <div className="sort-dropdown">
      <div className="dropdown">
        <span>Sort by: {sortBy}</span>
        <div className="dropdown-content">
          <button onClick={() => sortItems('Newest')} type="button">
            Newest
          </button>
          <button onClick={() => sortItems('Oldest')} type="button">
            Oldest
          </button>
          <button onClick={() => sortItems('A - Z')} type="button">
            A - Z
          </button>
          <button onClick={() => sortItems('Z - A')} type="button">
            Z - A
          </button>
        </div>
      </div>
    </div>
  );
}

DropDown.propTypes = {
  sortItems: PropTypes.func,
  sortBy: PropTypes.string,
};

const mapStateToProps = state => ({
  sortBy: state.all.sortBy,
});

const mapDispatchToProps = dispatch => ({
  sortItems: sortBy => dispatch(sortItemsRequest(sortBy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDown);
