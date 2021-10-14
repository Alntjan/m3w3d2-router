import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Fun Facts about: {this.props.match.params.name}</h1>
      </div>
    );
  }
}
