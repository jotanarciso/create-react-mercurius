import React from "react";
import './assets/scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} component={route.view} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
