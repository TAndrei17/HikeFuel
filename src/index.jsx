import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import init from './init.jsx';

const app = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = init();
  root.render(
    <React.StrictMode>
      {vdom}
    </React.StrictMode>,
  );
};

app();
