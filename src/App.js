import React, {Component} from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigator from "./components/Navigator";
import Details from "./routes/Details";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route paht="/movie/:id" component={Details}></Route>
    </HashRouter>
  )
}

export default App;