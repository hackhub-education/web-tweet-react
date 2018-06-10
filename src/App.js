import React, { Component } from 'react';

// load components
import Nav from './component/Nav';
import Page from './component/Page';

// load assets
import logo from './img/logo.png';
import avatar from './img/sample-avatar.png';

class App extends Component {
  render() {
    return (
      <div>
        <Nav logo={logo} avatar={avatar}/>
        <Page avatar={avatar}/>
      </div>
    );
  }
}

export default App;
