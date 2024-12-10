import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FacebookEmojiCounter from './Facebookemoji'
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(

  <React.Fragment>
    <FacebookEmojiCounter type="Like" />
    < FacebookEmojiCounter type="Love" />
    < FacebookEmojiCounter type="happy" />
  </React.Fragment>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly / CRA - PWA
serviceWorker.unregister();