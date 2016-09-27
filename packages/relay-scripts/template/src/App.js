import React, { Component } from 'react';
import Relay from 'react-relay';
import './App.css';

class App extends Component {
  render () {
    const { person: { name  } } = this.props;
    return (
      <div>{name}</div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    person: () => Relay.QL`
      fragment on Person {
        name
      }
    `
  }
});
