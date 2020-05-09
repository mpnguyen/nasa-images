/**
 *
 * All
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SearchBar from 'components/SearchBar/Loadable';
import makeSelectAll from './selectors';
import reducer from './reducer';
import saga from './saga';
import { searchImagesRequest } from './actions';

export function All({ searchImages }) {
  useInjectReducer({ key: 'all', reducer });
  useInjectSaga({ key: 'all', saga });
  const [searchTxt, setSearchTxt] = useState('');
  const onSearch = event => {
    event.preventDefault();
    searchImages(searchTxt);
  };

  return (
    <div>
      <Helmet>
        <title>All</title>
      </Helmet>
      <SearchBar
        text={searchTxt}
        onChange={event => setSearchTxt(event.target.value)}
        onSubmit={onSearch}
      />
    </div>
  );
}

All.propTypes = {
  searchImages: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  all: makeSelectAll(),
});

function mapDispatchToProps(dispatch) {
  return {
    searchImages: text => dispatch(searchImagesRequest(text)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(All);
