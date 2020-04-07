/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import { connect } from "react-redux";

import Header from "components/commons/Header";

function CommonLayout(props) {
  const { history } = props;

  return (
    <Main>
      <Header history={history} />
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
  color: white;
  min-height: 100vh;
  font-family: 'Barlow', 'Arial' !important;
`;

const Layout = Styled.div`
  display: flex;
  height: calc(100vh - 48px);
  min-height: calc(100vh - 48px);
`;
