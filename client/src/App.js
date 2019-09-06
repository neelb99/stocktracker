import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
    </Router>
  );
}

export default App;
