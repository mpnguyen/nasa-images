/**
 *
 * Removed
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import DataList from 'components/DataList/Loadable';
import makeSelectRemovedData from './selectors';
import { likeItemRequest, removeItemRequest } from '../All/actions';

export function Removed({ data, likeItem, removeItem }) {
  return (
    <div>
      <Helmet>
        <title>Removed</title>
      </Helmet>
      <h1>Removed items</h1>
      <DataList data={data} likeItem={likeItem} removeItem={removeItem} />
    </div>
  );
}

Removed.propTypes = {
  data: PropTypes.array,
  likeItem: PropTypes.func,
  removeItem: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectRemovedData(),
});

function mapDispatchToProps(dispatch) {
  return {
    likeItem: href => dispatch(likeItemRequest(href)),
    removeItem: text => dispatch(removeItemRequest(text)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Removed);
