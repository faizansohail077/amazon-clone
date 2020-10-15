import React, { useEffect, useReducer } from 'react';
import auth from './firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
// import ReducerComp, { initialState } from './reducer';
import { useStateValue } from './StateProvider';

function App() {
const {dispatch,state} = useStateValue()
  // const [{ user }, dispatch] = useReducer(ReducerComp, initialState);
const {user} = state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })

    return () => {
      unsubscribe();
    }
  }, [])
  console.log('user is this', user)

  return (



    <Router>
      <div className="App">

        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />

            <h1>this is checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <Login />

            <h1>This is login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <h1>Homepage</h1>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
