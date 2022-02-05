import React from "react";
import "./style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FilmPage from "./Pages/FilmPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:movieId" component={FilmPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
