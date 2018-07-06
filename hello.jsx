import { h, render, Component } from 'preact';

/** @jsx h */

class Hello extends Component {
  render() {
     return <h1>Hello</h1>
  }
}

render(<Hello/>, document.getElementById('hello'));
