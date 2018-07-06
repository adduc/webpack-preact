import { h, render, Component } from 'preact';

/** @jsx h */

class World extends Component {
  render() {
     return <h1>World</h1>
  }
}

render(<World/>, document.getElementById('world'));
