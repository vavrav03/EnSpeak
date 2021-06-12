import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { toLoginPage } from "redux/actions/redirect";
import { isLoggedIn } from "redux/selectors";

const ProtectedRoute = ({ isLoggedIn, toLoginPage, ...rest }) => {
   if (isLoggedIn) {
      return <Route {...rest} />;
   } else {
      toLoginPage();
      return null;
   }
};

const mapStateToProps = (state) => {
   return {
      isLoggedIn: isLoggedIn(state),
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      toLoginPage: () => dispatch(toLoginPage()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
