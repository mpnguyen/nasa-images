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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SearchBar from 'components/SearchBar/Loadable';
import DataList from 'components/DataList/Loadable';
import Modal from 'components/Modal';
import makeSelectAll from './selectors';
import reducer from './reducer';
import saga from './saga';
import { searchImagesRequest } from './actions';

export function All({ searchImages, all }) {
  useInjectReducer({ key: 'all', reducer });
  useInjectSaga({ key: 'all', saga });
  const [searchTxt, setSearchTxt] = useState('');
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
  const onSearch = event => {
    event.preventDefault();
    searchImages(searchTxt);
    setIsSearchModalVisible(false);
  };

  return (
    <div>
      <Helmet>
        <title>All</title>
      </Helmet>

      <button
        className="get-data-btn"
        type="button"
        onClick={() => setIsSearchModalVisible(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
        Get data
      </button>
      <DataList data={all.data} />

      <Modal
        isVisible={isSearchModalVisible}
        onRequestClose={() => setIsSearchModalVisible(false)}
      >
        <SearchBar
          text={searchTxt}
          onChange={event => setSearchTxt(event.target.value)}
          onSubmit={onSearch}
        />
      </Modal>
    </div>
  );
}

All.propTypes = {
  searchImages: PropTypes.func.isRequired,
  all: PropTypes.object,
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
