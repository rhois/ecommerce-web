import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

export default function BackgroundPage(props) {
  return (
    <Wrapper
      pos={props.bgPosition}
      bg={props.background}
      container={props.container}
      padding={props.padding}
    >
      {props.children}
    </Wrapper>
  );
}

BackgroundPage.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string.isRequired,
  bgPosition: PropTypes.oneOf(["top", "left", "bottom", "right", "center"]),
  container: PropTypes.string,
  padding: PropTypes.string
};

BackgroundPage.defaultProps = {
  position: "center",
  children: null,
  container: null,
  padding: "0px"
};

const Wrapper = Styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  background-image: url(${({ bg }) => bg});
  background-size: 100%;
  background-position: ${({ pos }) => pos};
  background-repeat: no-repeat;
  flex-direction: column;
  ${({ container }) =>
    container === "center" &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  padding: ${props => props.padding};
  box-sizing: border-box;
`;
