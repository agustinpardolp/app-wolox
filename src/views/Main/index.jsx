import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Routes from "../../routes";
import PrivateRoute from "../../routes/privateRoute";
import Navbar from "../../components/Navbar/";
import { StyledMain } from "./styled-components";
import Introduction from "../Home/Introduction";
import Technologies from "../Home/Technologies";
import Requirements from "../Home/Requirements";
import Benefits from "../Home/Benefits";
import Home from "../Home";
import Login from "../Login";
import Footer from "../../components/Footer";

const Main = () => {
  return (
    <StyledMain>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* <PrivateRoute path="/:set?" component={Routes} />
        <Redirect to="/" />  */}
      </Switch>
      <Footer />
    </StyledMain>
  );
};

export default withRouter(Main);
