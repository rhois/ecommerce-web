/* eslint-disable camelcase */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import Styled from "styled-components";
import { connect } from "react-redux";

const cookies = new Cookies();
function CommonLayout(props) {
  const accessToken = cookies.get("access_token");
  useEffect(() => {
    if (accessToken === undefined) {
      props.history.push("/login");
    }
  });

  return (
    <Main>
      <Layout>{props.children}</Layout>
    </Main>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    popupFeedback: state.popupFeedback
  };
}

export default connect(mapStateToProps)(CommonLayout);

CommonLayout.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  location: PropTypes.object,
  user: PropTypes.object,
  popupFeedback: PropTypes.object
};

const Main = Styled.div`
  position: relative;
  min-height: 100vh;
`;

const Layout = Styled.div`
  display: flex;
  height: calc(100vh - 48px);
  min-height: calc(100vh - 48px);
`;
