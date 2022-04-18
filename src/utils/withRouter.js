import React, { Component } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        params={params}
        navigate={navigate}
        location={location}
      />
    );
  };

  return ComponentWithRouterProp;
};
export default withRouter;
