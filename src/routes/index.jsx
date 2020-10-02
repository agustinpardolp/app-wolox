import React, { lazy, Suspense } from "react";
import { Redirect, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./privateRoute";

const Home = lazy(() => import("../views/Home"));
const Technologies = lazy(() => import("../views/Technologies"));

const Routes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Redirect from="/" to="/home" />
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/technologies" component={Technologies} />
      </Switch>
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
