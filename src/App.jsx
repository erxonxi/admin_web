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

function App() {
  const [ auth, setAuth ] = useState( false );

  return (
    <BrowserRouter>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Admin} path="/admin" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route>
            <NoFound />
          </Route>
        </Switch>

      </Flex>
    </BrowserRouter>
  )
}

export default App
