/**
 *
 * Liked
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLiked from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Liked() {
  useInjectReducer({ key: 'liked', reducer });
  useInjectSaga({ key: 'liked', saga });

  return (
    <div>
      <Helmet>
        <title>Liked</title>
      </Helmet>
      <h1>Liked</h1>
    </div>
  );
}

Liked.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  liked: makeSelectLiked(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Liked);
