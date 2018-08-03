// import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
// import ReactDOM from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Home />
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
