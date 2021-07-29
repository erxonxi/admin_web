// packages
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
// pages
import Home from './pages/home';
import Admin from './pages/admin';
import Login from './pages/login';
import NoFound from './pages/nofound';
import Dashboard from './pages/dashboard';
// components
import PrivateRoute from './components/privateRoute';
import NavLink from './components/NavBar';

function App() {
  const [ auth, setAuth ] = useState( false );

  return (
    <BrowserRouter>
      {auth ? ( <NavLink /> ) : null } 
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Switch>
          <Route exact path="/login">
            <Login setAuth={setAuth} />
          </Route>
          <PrivateRoute component={Home} auth={auth} path="/" exact />
          <PrivateRoute component={Admin} auth={auth} path="/admin" exact />
          <PrivateRoute component={Dashboard} auth={auth} path="/dashboard" exact />
          <Route>
            <NoFound />
          </Route>
        </Switch>
      </Flex>
    </BrowserRouter>
  )
}

export default App
