import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Routerconfig from './routes/Routerconfig';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <HashRouter>
          <Header/>
          <Routerconfig/>
        </HashRouter>
    </div>
  );
}

export default App;
