import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

