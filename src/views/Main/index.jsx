import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Routes from "../../routes";
import PrivateRoute from "../../routes/privateRoute";
import Navbar from "../../components/Navbar/";
import { StyledMain } from "./styled-components";
import Home from "../Home";
import Login from "../Login";

const Main = () => {
  return (
    <StyledMain>
      <Navbar />
      {/* <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/:set?" component={Routes} />
        <Redirect to="/" />
      </Switch> */}
    </StyledMain>
  );
};

export default withRouter(Main);
