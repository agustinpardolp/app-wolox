import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../../components/Navbar/";
import { StyledMain } from "./styled-components";
import MainRouter from "../../routes/Router";
import ToastNotification from "../../components/ToastNotification";
import Footer from "../../components/Footer";
const Main = () => {
  return (
    <StyledMain>
      <Navbar />
      <MainRouter />
      <ToastNotification />
      <Footer />
    </StyledMain>
  );
};

export default withRouter(Main);
