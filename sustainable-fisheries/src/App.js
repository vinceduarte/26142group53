import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import Login from './components/Login/Login';
import Forgot from './components/Forgot/Forgot';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Single from './components/single/Single';
import Write from './components/Write/Write';
import useToken from './useToken';

function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return (
      <BrowserRouter>
      <Login setToken={setToken} />     
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/forgotpassword">
          <Forgot />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
 
  // if a login token is found
  return (
      
      <BrowserRouter>
      
      <div className="wrapper">
      <h1>Sustainable Fisheries</h1>
    

        <Switch>
         
        <Route path ="/" exact component={Home}/>
        <Route path ="/home" exact component={Home}/>
        <Route path="/profile" exact component={Profile}/>
          
        <Route path="/write" exact component={Write}/>
         
        <Route path="/post/2" exact component={Single}/>
         
        </Switch>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
