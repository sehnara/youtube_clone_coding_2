import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';


const youtube = new Youtube('AIzaSyDGgWM2b6ovCQZJ77_AlhP5MKVWKr2gGEw');
ReactDOM.render(
  <React.StrictMode> 
    <App 
      youtube = {youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);

