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
import SearchBar from 'components/SearchBar/Loadable';
import DataList from 'components/DataList/Loadable';
import Modal from 'components/Modal';
import SortDropDown from 'containers/SortDropDown';

import { makeSelectData } from './selectors';
import saga from './saga';
import {
  searchImagesRequest,
  likeItemRequest,
  removeItemRequest,
} from './actions';
import { showItemFormRequest } from '../ItemForm/actions';

export function All({
  searchImages,
  data,
  likeItem,
  removeItem,
  showItemForm,
}) {
  useInjectSaga({ key: 'all', saga });
  const [searchTxt, setSearchTxt] = useState('');
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
  const onSearch = event => {
    event.preventDefault();
    setIsSearchModalVisible(false);
    searchImages(searchTxt);
  };

  return (
    <div>
      <Helmet>
        <title>All</title>
      </Helmet>

      <h1>All items</h1>

      <button
        className="get-data-btn"
        type="button"
        onClick={() => setIsSearchModalVisible(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
        Get data
      </button>

      <SortDropDown />

      <DataList
        data={data}
        likeItem={likeItem}
        removeItem={removeItem}
        showItemForm={showItemForm}
      />

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
  data: PropTypes.array,
  likeItem: PropTypes.func,
  removeItem: PropTypes.func,
  showItemForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    searchImages: text => dispatch(searchImagesRequest(text)),
    likeItem: href => dispatch(likeItemRequest(href)),
    removeItem: text => dispatch(removeItemRequest(text)),
    showItemForm: item => dispatch(showItemFormRequest(item)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(All);
