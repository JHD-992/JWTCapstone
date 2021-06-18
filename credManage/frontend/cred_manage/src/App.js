import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import UpdatedCreds from './Components/UpdatedCreds';
import UpdateDiv from './Components/UpdateDiv';
import UpdateRole from './Components/UpdateRole';

function App() {
  return (

    //create a react page component that reacts to the current url and changes render
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={false} path="/register" component={RegisterPage} />
        <Route exact={true} path="/login" component={LoginPage} />
        <Route exact={false} path="/dashboard" component={DashboardPage} />  
        <Route exact={false} path="/updateCreds" component={UpdatedCreds} />
        <Route exact={false} path="/updateDiv" component={UpdateDiv} />
        <Route exact={false} path="/updateRole" component={UpdateRole} />
      </BrowserRouter>
    </div>
  );
}

export default App;
