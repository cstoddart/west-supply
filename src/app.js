import React, { Component } from 'react';

import { Home } from './components/home';
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
      <div>
        <context.Provider value={this.state}>
          <Home />
        </context.Provider>
      </div>
    );
  }
}
