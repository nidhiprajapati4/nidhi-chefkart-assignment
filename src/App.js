import React from 'react';
import './App.css';
import HomeButton from './Components/HomeButton';
import AppRouting from './Components/AppRouting';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
     <header>
      <div>
        <Link to = '/'>Home
        </Link>
        <Link to = '/dishesList'><HomeButton/>
        </Link>
      </div>
     </header>
      <AppRouting/>
    </>
  );
}

export default App;
