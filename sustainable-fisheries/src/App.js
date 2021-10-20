import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  // TODO: 'setToken' is assigned a value but never used
  const [token, setToken] = useState();

  if(!token) {
    return (
        <Login />
    )
  }
  
  // if a login token is found
  return (
    <div className="wrapper">
      <h1>Sustainable Fisheries</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
