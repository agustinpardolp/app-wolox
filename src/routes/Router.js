import React, { lazy, Suspense } from "react";

import { Redirect, Switch, withRouter } from "react-router-dom";

import Login from "../views/Login";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Spinner from "../components/Spinner";

const Technologies = lazy(() => import("../views/Technologies"));
const Home = lazy(() => import("../views/Home"));
const MainRouter = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/auth/home" component={Home} />
        <PrivateRoute exact path="/auth/tecnologias" component={Technologies} />
        <Redirect from="/*" to="home" />
      </Switch>
    </Suspense>
  );
};

export default withRouter(MainRouter);
