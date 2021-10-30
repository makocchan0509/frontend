import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Secured from "./Secured";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to third app</p>
        <Router>
          <div className="container">
            <Route exact path="/" component={Secured}/>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
