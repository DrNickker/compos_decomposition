/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */


import React from 'react';
import './App.css';
import News from './components/News';
import SearchMenu from './components/SearchMenu';
import Search from './components/Search';
import Prompt from './components/Prompt';
import AdvertisingSlider from './components/AdvertisingSlider';
import BlockFoot from './components/BlockFoot';
import {filtres} from './data/filtres'


export default function App() {
  return (
    <React.Fragment>
      <News />
      <SearchMenu filtres={filtres}/>
      <Search />
      <Prompt />
      <AdvertisingSlider />
      <BlockFoot />
    </React.Fragment>
  );
}
