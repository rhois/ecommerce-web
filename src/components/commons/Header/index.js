import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import vLogo from "assets/images/kyc-logo.svg";
import { Color } from "theme/Setting";
import HeaderFullscreen from "./Fullscreen";

function Header({ rightOption }) {
  return (
    <Wrapper className="Header">
      <Panel>
        <Link to={"/"}>
          <Block>
            <img src={vLogo} alt="pindai" />
          </Block>
        </Link>
        <Block>{rightOption}</Block>
      </Panel>
    </Wrapper>
  );
}

Header.propTypes = {
  rightOption: PropTypes.object
};

Header.defaultProps = {
  rightOption: PropTypes.object
};

export { HeaderFullscreen };
export default Header;

const Wrapper = Styled.div`
  position: relative;
  height: 56px;
  width: 100%;
`;

const Panel = Styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  border-bottom: 1px solid ${Color.secondary2};
  background-color: white;
`;

const Block = Styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  img {
    margin-left: 12px;
  }
`;
