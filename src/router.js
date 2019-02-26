import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Navigation, Footer } from './components/ui';
import { Home } from './components/home';
import { Products } from './components/products';
import { Product } from './components/product';
import { Cart } from './components/cart';

export const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:handle" component={Product} />
      <Route path="/cart" component={Cart} />
      <Footer />
    </Fragment>
  </BrowserRouter>
);
