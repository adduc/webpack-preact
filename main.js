import { h, render, Component } from 'preact';

import Hello from './hello.jsx';
import World from './world.jsx';

render(<Hello/>, document.getElementById('hello'));
render(<World/>, document.getElementById('world'));
