import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

export const Login = () => {
  return <LoginForm />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
