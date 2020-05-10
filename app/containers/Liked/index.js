/**
 *
 * Liked
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import DataList from 'components/DataList/Loadable';
import makeSelectLikedData from './selectors';
import { likeItemRequest, removeItemRequest } from '../All/actions';
import { showItemFormRequest } from '../ItemForm/actions';

export function Liked({ data, likeItem, removeItem, showItemForm }) {
  return (
    <div>
      <Helmet>
        <title>Liked</title>
      </Helmet>
      <h1>Liked items</h1>
      <DataList
        data={data}
        likeItem={likeItem}
        removeItem={removeItem}
        showItemForm={showItemForm}
      />
    </div>
  );
}

Liked.propTypes = {
  data: PropTypes.array,
  likeItem: PropTypes.func,
  removeItem: PropTypes.func,
  showItemForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectLikedData(),
});

function mapDispatchToProps(dispatch) {
  return {
    likeItem: href => dispatch(likeItemRequest(href)),
    removeItem: text => dispatch(removeItemRequest(text)),
    showItemForm: item => dispatch(showItemFormRequest(item)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Liked);
