/**
 *
 * Removed
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
import makeSelectRemoved from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Removed() {
  useInjectReducer({ key: 'removed', reducer });
  useInjectSaga({ key: 'removed', saga });

  return (
    <div>
      <Helmet>
        <title>Removed</title>
      </Helmet>
      <h1>Removed</h1>
    </div>
  );
}

Removed.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  removed: makeSelectRemoved(),
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

export default compose(withConnect)(Removed);
