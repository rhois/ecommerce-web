import React from "react";
import PropTypes from "prop-types";
import { Color } from "theme/Setting";
import styled, { css } from "styled-components";
import LoadingSpinner from "components/commons/LoadingSpinner";

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(["primary", "icon", "secondary"]),
    children: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.string.isRequired,
      PropTypes.array.isRequired
    ]),
    disabled: PropTypes.bool,
    width: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    onClick: () => {},
    isLoading: false,
    className: "",
    type: "primary",
    disabled: false,
    width: "auto",
    style: {},
    id: ""
  };

  render() {
    const {
      isLoading,
      onClick,
      className,
      style,
      type,
      children,
      disabled,
      width,
      id
    } = this.props;
    return (
      <ButtonStyle
        isLoading={!isLoading}
        disabled={disabled}
        onClick={onClick}
        className={className}
        style={style}
        type={type}
        width={width}
        id={id}
      >
        {isLoading === true ? <LoadingSpinner show={true} /> : children}
      </ButtonStyle>
    );
  }
}

const ButtonStyle = styled.button`
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 14px;
  text-decoration: none;
  border-radius: 8px;
  outline: none;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  user-select: none;
  min-height: 40px;
  padding: 0 16px;
  width: ${props => props.width};
  img{
    margin-right: 10px;
  }
  &:active{
    background: ${Color.primary1};
    transform: translateY(4px);
  }
  &:hover:enabled {
    background: ${Color.primary2};
  }
  & > :not(:first-child) {
    margin-left: 8px;
  }
  & > * {
    display: flex !important;
  }
  ${props =>
    props.disabled &&
    `cursor: default;
    opacity: 0.5;`}


  ${props =>
    props.isLoading &&
    css`
      border: none;
      color: ${Color.primary1};
      font-weight: bold;
      color: white;
    `}

  ${props =>
    props.type === "secondary" &&
    css`
      background: white;
      border: 2px solid ${Color.secondary2};
      color: ${Color.secondary1};
      &:hover:enabled {
        background: ${Color.primary2};
        border: 2px solid ${Color.primary2};
        color: white;
      }
    `}
`;
