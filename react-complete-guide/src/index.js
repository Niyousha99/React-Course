import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Typically render one root react component (all other components are nested)
ReactDOM.render(<App />, document.getElementById('root')); // root in index html file
registerServiceWorker();
