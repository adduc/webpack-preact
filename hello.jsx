import { h, render, Component } from 'preact';

class Hello extends Component {
  render() {
     return <h1>Hello</h1>
  }
}

render(<Hello/>, document.getElementById('hello'));
