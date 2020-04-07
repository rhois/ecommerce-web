import React, { Component } from "react";
import styled from "styled-components";
import { Color } from "theme/Setting";
import PropTypes from "prop-types";

const RelativeDivCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RelativeDivRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const InputLabel = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  display: block;
  position: relative;
  color: #616871;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputText = styled.input`
  background-color: transparent;
  width: 100%;
  display: block;
  border: none;
  height: ${props => props.height || `40px`};
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  color: #616871;
  border: ${props => {
    if (props.error) {
      return `2px solid ${Color.primary1}`;
    }
    return `2px solid #E3E8EE`;
  }};
  font-size: ${props => props.fontSize || `14px`};
  position: relative;
  ${props => props.readOnly && `background-color: ${Color.primary1}`};
  ::placeholder {
    font-size: ${props => props.fontSize || `14px`};
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: revert;
    letter-spacing: normal;
  }
  :focus {
    border: 2px solid ${Color.primary1};
  }
`;

const InputAfter = styled.div`
  position: absolute;
  right: 0;
`;

const InputError = styled(InputLabel)`
  font-size: 12px;
  font-weight: 500;
  color: ${Color.primary1};
  margin-bottom: 5px;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
  }
`;

export default class Text extends Component {
  render() {
    const {
      label,
      tooltip,
      children,
      icon,
      error,
      fontSize,
      addonAfter,
      ...defaultProps
    } = this.props;

    if (label || tooltip || children || error) {
      return (
        <RelativeDivCol>
          {label && (
            <InputLabel>
              {label}
              {tooltip && tooltip}
            </InputLabel>
          )}
          <RelativeDivRow>
            {icon !== undefined ? <img src={icon} alt="icon" /> : ""}
            <InputText {...defaultProps} error={error} fontSize={fontSize} />
            {children}
            {addonAfter && <InputAfter>{addonAfter}</InputAfter>}
          </RelativeDivRow>
          {error && <InputError>{error}</InputError>}
        </RelativeDivCol>
      );
    }
    return (
      <RelativeDivRow>
        {icon !== undefined ? (
          <IconWrapper>
            <img src={icon} alt="icon" />
          </IconWrapper>
        ) : (
          ""
        )}
        <InputText {...defaultProps} />
      </RelativeDivRow>
    );
  }
}

Text.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.element,
  error: PropTypes.string,
  children: PropTypes.element,
  addonAfter: PropTypes.element,
  fontSize: PropTypes.string,
  icon: PropTypes.string
};
