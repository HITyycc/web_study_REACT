import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import * as serviceWorker from './serviceWorker';
import Container from './Container.js'
import Articles from './Articles.js'
var list = [{index:'首页', content: <Welcome />},{index:'个人文章', content: <Articles/>}];
ReactDOM.render(
  <React.StrictMode>
    <Container list = {list}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
