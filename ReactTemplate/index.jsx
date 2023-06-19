import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css'

function App() {
  return (
    <>
      <div className="text-xl">Content</div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);