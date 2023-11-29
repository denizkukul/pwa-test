import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// async function registerPeriodicBlogUpdate() {
//   const registration = await navigator.serviceWorker.ready;
//   try {
//     await registration.periodicSync.register("update-blogs", {
//       minInterval: 30 * 1000,
//     });
//   } catch (err) {
//     console.log("Periodic Sync could not be registered!", err);
//   }
// }

// registerPeriodicBlogUpdate();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
