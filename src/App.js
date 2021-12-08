import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailView from "./detail";
import FetchData from "./fetchData";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DetailView} />
        <Route exact path="/" component={FetchData} />
      </Switch>
    </Router>
  );
}
