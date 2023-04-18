import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { GlobalNav } from './components/GlobalNav';
import { Top } from './components/Top';
import { About } from './components/About';
import { Register } from "./components/Register";

export const App = () =>  {
  return (
    <BrowserRouter>
      <GlobalNav />
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
