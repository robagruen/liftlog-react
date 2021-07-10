import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Exercises from "./../Exercises/Exercises";
import Dashboard from "./../Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/exercises">Exercises</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}