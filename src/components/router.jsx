import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Apps from "../pages/apps";

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apps" component={Apps} />
    </Switch>
);
