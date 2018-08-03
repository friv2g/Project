import React, { Component } from 'react';

import header from './header';
import Card from './card'

class Home extends Component {
  render() {
    return (
      <div>
        { header() }
        <Card />
      </div>
    );
  }
}

export default Home;
