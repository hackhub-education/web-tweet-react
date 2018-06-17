import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "./models";

// load components
import Page from './component/Page';

// generate Redux store
const store = init({
  models
});

class App extends Component {

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Page />
        </Provider>
      </Router>
    );
  }
}

export default App;
