import React, { lazy, Suspense } from "react";
import { Redirect, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./privateRoute";

const Home = lazy(() => import("../views/Home"));
const Technologies = lazy(() => import("../views/Technologies"));

const Routes = ({ match }) => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <PrivateRoute path={`${match.path}home`} component={Home} />
        <PrivateRoute
          path={`${match.path}tecnologias`}
          component={Technologies}
        />
      </Switch>
      <Redirect from="/" to="/auth/home" />
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
