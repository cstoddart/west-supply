import React, { Component } from 'react';

import { Router } from './router';
import { context, defaultState } from './context';

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
        <Router />
      </context.Provider>
    );
  }
}
