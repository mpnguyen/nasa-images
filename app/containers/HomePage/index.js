/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';

import Header from 'components/Header/Loadable';
import { Switch, Route } from 'react-router-dom';

import { useInjectReducer } from 'utils/injectReducer';
import All from 'containers/All/Loadable';
import Liked from 'containers/Liked/Loadable';
import Removed from 'containers/Removed/Loadable';
import Spinner from 'components/Spinner';
import reducer from './reducer';

import './home-page.scss';

// eslint-disable-next-line react/prefer-stateless-function
function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });

  const {
    location: { pathname },
    isSpinnerVisible,
  } = props;

  return (
    <div>
      <Header pathname={pathname} />
      <main>
        <Switch>
          <Route exact path="/" component={All} />
          <Route exact path="/liked" component={Liked} />
          <Route exact path="/removed" component={Removed} />
        </Switch>
        {isSpinnerVisible && (
          <div className="overlay">
            <Spinner />
          </div>
        )}
      </main>
    </div>
  );
}

HomePage.propTypes = {
  location: PropTypes.object,
  isSpinnerVisible: PropTypes.bool,
};

const mapStateToProps = state => ({
  isSpinnerVisible: get(state, ['homePage', 'isSpinnerVisible']),
});

export default connect(mapStateToProps)(HomePage);
