import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Buy from "./Buy";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/courses/:id" component={Buy} />
    </Switch>
  </BrowserRouter>
);

export default Router;
