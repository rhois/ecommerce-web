import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { Color } from "theme/Setting";

function Footer() {
  return (
    <WrapFooter>
      <a href="#">Home</a>
      <a href="#">Feed</a>
      <a href="#">Cart</a>
      <a href="#">Profile</a>
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
  padding: 0 15px;
  font-family: 'Barlow','Arial' !important;
  a{
    text-decoration: none;
    color: ${Color.primary1};
    text-decoration: none;
  }
  box-sizing: border-box;
  border-top: 1px solid #ddd;
`;
