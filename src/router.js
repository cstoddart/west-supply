import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Navigation } from './components/ui';
import { Home } from './components/home';
import { Cart } from './components/cart';

export const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Fragment>
  </BrowserRouter>
);
