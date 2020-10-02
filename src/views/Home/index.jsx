import React from "react";
import { connect } from "react-redux";
import { StyledHome } from "./styled-components";

export const Home = () => {
  return <StyledHome></StyledHome>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
