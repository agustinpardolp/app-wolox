import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const checkAuth = () => {
    let tokenData = JSON.parse(sessionStorage.getItem("token_data"));

    if (tokenData) {
      return true;
    } else return false;
  };

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          checkAuth(props) ? (
            <Component {...props} />
          ) : (
            <>
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            </>
          )
        }
      />
    </>
  );
};
const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(PrivateRoute);
