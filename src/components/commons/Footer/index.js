import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import Text from "components/commons/Text";
import { Color } from "theme/Setting";

function Footer() {
  return (
    <WrapFooter>
      <Text size={12}>PRIVACY POLICY</Text>
      <Text size={12}>© {new Date().getFullYear()}. ALL RIGHTS RESERVED</Text>
    </WrapFooter>
  );
}

export default Footer;

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired,
    PropTypes.array.isRequired
  ])
};

const WrapFooter = Styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  font-family: 'Barlow','Arial' !important;
  a{
    text-decoration: none;
    color: ${Color.primary1};
    text-decoration: none;
  }
`;
