import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TraderPage from './pages/TraderPage/TraderPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TraderPage />, document.getElementById('root'));
registerServiceWorker();
