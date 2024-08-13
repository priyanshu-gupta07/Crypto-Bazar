import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import homepage from './pages/homepage';
import CoinPage from './pages/CoinPage';
import Header from './components/Header';

function App() {
  return (
    <div className="w-screen h-screen bg-[#111111] text-white">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' Component={homepage}></Route>
          <Route path='/coins/:id' Component={CoinPage}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
