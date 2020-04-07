import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { Color } from "theme/Setting";

export default function Panel(props) {
  const { width, padding, children, border, shadow, title, onClose } = props;
  return (
    <Wrapper
      width={width}
      padding={padding}
      border={border}
      shadow={shadow}
      title={title}
      onClose={onClose}
      {...props}
    >
      {(title || onClose) && <Header>{title}</Header>}
      {children}
    </Wrapper>
  );
}

Panel.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  shadow: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func
};
Panel.defaultProps = {
  children: null,
  width: "100%",
  padding: "32px",
  border: `1px solid ${Color.secondary2}`,
  shadow: false,
  title: null,
  onClose: null
};

const Header = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 39px;
  padding: 11.5px 16px;
  border-bottom: 1px solid ${Color.secondary2};
  font-weight: 600;
`;

const Wrapper = Styled.div`
  position: relative;
  background: white;
  box-shadow: ${({ shadow }) => shadow && "1px 0px 12px rgba(22, 22, 36, 0.1)"};
  border-radius: 8px;
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  overflow: hidden;
  ${({ title, onClose }) => (title || onClose) && `padding-top: 71px`};
  color: ${Color.secondary1};
`;
