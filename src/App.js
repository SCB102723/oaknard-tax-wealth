import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Oaknard Tax Wealth</h1>
        <Signup />
        <Login />
      </header>
    </div>
  );
}

export default App;