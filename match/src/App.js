import React from 'react';
import logo from './icons/chemistry.png';
import './App.css';
import TeaserBoard from './components/TeaserBoard/TeaserBoard';


function App() {

  return (
    <div className='App'>
      <header className="App-header">
        <TeaserBoard />
      </header>
    </div>
  );
}

export default App;
