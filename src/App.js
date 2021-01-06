import "./global.scss"
import { Home } from "./pages/home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { People } from "./pages/personagens";

function App() {
  return (
    <Router>
        <Switch> 
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/people">
           <People/>
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
