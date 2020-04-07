import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Color, HexToRgbA } from "theme/Setting";

export default function Dropdown(props) {
  const [show, setShow] = useState(false);
  const { children, overlay, placement, width } = props;

  function toggleDropdown() {
    setShow(!show);
  }

  return (
    <BoxDropdown onClick={toggleDropdown} show={show}>
      {children}
      <WrapDropdown show={show} placement={placement} width={width}>
        {overlay}
      </WrapDropdown>
      {show && <Overlay onClick={toggleDropdown} />}
    </BoxDropdown>
  );
}

Dropdown.defaultProps = {
  placement: ""
};

Dropdown.propTypes = {
  overlay: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  children: PropTypes.element.isRequired,
  placement: PropTypes.string,
  width: PropTypes.string
};

export const Menu = ({ children, onClick, className }) => (
  <MenuItemList onClick={onClick} className={className}>
    {children}
  </MenuItemList>
);

Menu.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

Menu.defaultProps = {
  className: "",
  onClick: () => {}
};

const BoxDropdown = styled.div`
  position: relative;
  cursor: pointer;
  ${props => props.show && `background-color: #FAFAFA`}
`;

const positionPlacement = placement => {
  switch (placement) {
    case "center":
      return `
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;       
      `;
    case "left":
      return `
        right: unset;
        left: 0; 
      `;
    default:
      return `
        right: 0;
      `;
  }
};

const WrapDropdown = styled.div`
  position: absolute;
  z-index: -1;
  box-sizing: border-box;
  width: ${props => props.width || `max-content`};
  height: auto;
  background-color: #ffffff;
  opacity: 0;
  transition: 0.1s ease-in;
  visibility: hidden;
  box-shadow: 1px 0px 12px rgba(22, 22, 36, 0.1);
  border-radius: 8px 0px 8px 8px;
  ${({ show }) =>
    show &&
    `
    z-index: 9;
    opacity: 1;
    visibility: visible;
    transition: 0.2s ease-out;
  `};
  ${({ placement }) => positionPlacement(placement)};
`;

const MenuItemList = styled.div`
  width: 100%;
  text-align: left;
  color: #616871;
  font-size: 12px;
  font-weight: bold;
  box-sizing: border-box;
  font-style: normal;
  font-stretch: normal;
  line-height: 14px;
  padding: 13px;
  cursor: pointer;
  outline: none;
  border-bottom: 1px solid;
  border-color: ${HexToRgbA(Color.primary1, 0.1)};
  a {
    text-decoration: none;
    color: ${Color.primary1};
  }
  :hover {
    border-radius: inherit;
    background-color: #e3e8ee;
    transition: 0.2s;
  }
`;

const Overlay = styled.div`
  position: fixed;
  content: "";
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 5;
`;
