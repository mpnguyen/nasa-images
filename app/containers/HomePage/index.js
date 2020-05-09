/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header/Loadable';
import { Switch, Route } from 'react-router-dom';

import All from 'containers/All/Loadable';
import Liked from 'containers/Liked/Loadable';
import Removed from 'containers/Removed/Loadable';

import './home-page.scss';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;

    return (
      <div>
        <Header pathname={pathname} />
        <main>
          <Switch>
            <Route exact path="/" component={All} />
            <Route exact path="/liked" component={Liked} />
            <Route exact path="/removed" component={Removed} />
          </Switch>
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object,
};

export default HomePage;
