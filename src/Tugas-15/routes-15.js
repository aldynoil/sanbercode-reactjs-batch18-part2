import React from "react";
import { Switch, Route } from "react-router-dom";
import Tugas9 from "../Tugas-9/tugas9";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas12 from "../Tugas-12/tugas12";
import Tugas13 from "../Tugas-13/tugas13";
import Tugas14 from "../Tugas-14/tugas14";

export const Home = () => {
  return (
    <div className="sections">
      <h1 className="text-center title">
        Tugas 15
        <br /> Silakan klik tombol navigasi di navbar
      </h1>
    </div>
  );
};

const subRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/tugas9">
        <Tugas9 />
      </Route>
      <Route exact path="/tugas10">
        <Tugas10 />
      </Route>
      <Route exact path="/tugas11">
        <Tugas11 start={110} />
      </Route>
      <Route exact path="/tugas12">
        <Tugas12 />
      </Route>
      <Route exact path="/tugas13">
        <Tugas13 />
      </Route>
      <Route exact path="/tugas14">
        <Tugas14 />
      </Route>
    </Switch>
  );
};

export default subRoutes;