import React, { Component } from 'react';

import { Router } from './router';
import { context, defaultState } from './context';
import { AppStyles } from './appStyles';

export class App extends Component {
  constructor() {
    super();

    const updateContext = (context) => this.setState(context);

    this.state = {
      ...defaultState,
      updateContext,
    }
  }

  render() {
    return (
      <context.Provider value={this.state}>
        <AppStyles />
        <Router />
      </context.Provider>
    );
  }
}
