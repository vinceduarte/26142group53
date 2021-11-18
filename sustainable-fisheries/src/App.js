import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Forgot from './components/Forgot/Forgot';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Single from './components/single/Single';
import Write from './components/Write/Write';


function App() {
  // TODO: 'setToken' is assigned a value but never used
  const [token, setToken] = useState();

  if(!token) {
    return (
      <BrowserRouter>
      
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgotpassword">
          <Forgot />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
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
