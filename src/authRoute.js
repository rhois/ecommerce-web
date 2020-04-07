import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export default function requireAuth(Component) {
  function AuthenticatedComponent(props) {
    return <Component {...props} />;
  }

  AuthenticatedComponent.propTypes = {
    router: PropTypes.object,
    location: PropTypes.object,
    user: PropTypes.object,
    history: PropTypes.object
  };

  return withRouter(AuthenticatedComponent);
}
