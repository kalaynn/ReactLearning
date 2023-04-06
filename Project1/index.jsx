import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <img src="/react-logo.png" width="40"/>
      <h1 className="text-3xl font-bold mb-4">Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);