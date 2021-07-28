// packages
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// pages
import Home from './pages/home';
import Admin from './pages/admin';
import NoFound from './pages/nofound';

function App() {
  const [ count, setCount ] = useState( 0 )

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route>
          <NoFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
