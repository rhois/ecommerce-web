import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import BackgroundPage from "components/commons/BackgroundPage";
import Panel from "components/commons/Panel";
import { connect } from "react-redux";

function MainPage() {
  return (
    <BackgroundPage position="bottom">
      <Container>
        <CardsWrapper>
          <Panel title="Profil Akun">Dashboard</Panel>
        </CardsWrapper>
      </Container>
    </BackgroundPage>
  );
}

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const Container = Styled.div`
  width: 100%;
  max-width: 696px;
  margin: auto;
  padding: 56px 0;
`;

const CardsWrapper = Styled.div`
  width: 100%;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;

  font-size: 14px;
  line-height: 17px;
`;

export default connect()(MainPage);
