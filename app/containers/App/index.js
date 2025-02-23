/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from 'containers/HomePage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Nasa Images" defaultTitle="Nasa Images" />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
