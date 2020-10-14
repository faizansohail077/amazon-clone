import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/checkout">
            <Header />

            <h1>this is checkout</h1>
          </Route>
          <Route path="/login">
            <Header />

            <h1>This is login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
            <h1>Homepage</h1>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
