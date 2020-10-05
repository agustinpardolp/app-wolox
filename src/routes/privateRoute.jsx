import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ token, component: Component, ...rest }) => {
  const checkAuth = () => {
    let tokenData = JSON.parse(localStorage.getItem("token_data"));

    if (tokenData || token) {
      // console.log("TRUE", "local: ", tokenData, "rdeux: ", token);
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
export const mapStateToProps = (state) => {
  const {
    user: { token },
  } = state;
  return {
    token,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
