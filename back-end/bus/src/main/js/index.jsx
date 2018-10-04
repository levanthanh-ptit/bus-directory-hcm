import * as React from "react";
import { render } from 'react-dom';
import { App } from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="" render={() => <App />} />
    </Switch>
  </BrowserRouter>
);

render(routes, document.getElementById('root'));

