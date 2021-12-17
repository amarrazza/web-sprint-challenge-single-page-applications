import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import axios from "axios";
import Home from './Home'
import Pizza from "./Pizza";


const App = () => {
  return (
    <>
      <h1><a href='/'>Lambda Eats</a></h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route path='/pizza'>
          <Pizza />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
