import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Apps from "../pages/apps";
import Rerouter from "../pages/rerouter";
import QRPop from "../pages/qrpop";

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apps" component={Apps} />
      <Route path="/rerouter" component={Rerouter} />
      <Route path="/qrpop" component={QRPop} />
    </Switch>
);
