import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import DPform from "./components/DPform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/dp/form" component={DPform} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
