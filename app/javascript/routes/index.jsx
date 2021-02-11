import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quotes from "../components/Quotes";
import ShareFromApi from "../components/ShareFromApi";
import Shares from "../components/Shares";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Shares} />
      <Route path="/shares/:id" component={ShareFromApi} />
      <Route path="/shares" exact component={Shares} />
      <Route path="/quotes/:date" component={Quotes} />
    </Switch>
  </Router>
);
