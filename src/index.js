import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './routes';

const Index = () => (
  <div className="cb">
    <Routes />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
