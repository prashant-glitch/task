import React from "react";
import "./App.css";
import Home from "./Home";
import Time from "./Time";
import Data from "./Data";
import Currency from "./Currency";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route path="/Time" component={Time} />
        <Route path="/Data" component={Data} />
        <Route path="/Currency" component={Currency} />
      </Switch>
    </>
  );
}

export default App;
