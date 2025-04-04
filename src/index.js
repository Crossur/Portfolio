import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx'
import '../src/styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


// Enable HMR for React components
// if (module.hot) {
//   module.hot.accept();
// }
