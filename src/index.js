//          ----- Documentation for tachyons extension classes: http://tachyons.io/docs/ -----
//          ----- Guide for using the @font-face: https://css-tricks.com/snippets/css/using-font-face/ -----
//          ----- SEGA Logo Font (font styling): https://www.cufonfonts.com/font/sega-logo-font

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
              <React.StrictMode>
                <App />
              </React.StrictMode>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
