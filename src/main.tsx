import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,  )
}
