import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserManagement from './components/UserManagement';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <div className="logo">ZENITH EVENTS</div>
        <Header />
        <UserManagement />
        <Statistics />
        
      </div>
    </div>
  );
}

export default App;
