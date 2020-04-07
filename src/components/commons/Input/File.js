import React, { Component } from "react";
import Styled from "styled-components";
import { NV } from "nodeflux-design-system";

import PropTypes from "prop-types";

import IconUpload from "assets/icon/visionaire/upload-dark.svg";
import IconClose from "assets/icon/visionaire/exit-dark.svg";

export default class File extends Component {
  render() {
    const {
      id,
      label,
      tooltip,
      children,
      error,
      fontSize,
      addonAfter,
      type,
      value,
      onChange,
      subtext,
      accept,
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
            <InputText
              {...defaultProps}
              type="text"
              error={error}
              value={value}
              fontSize={fontSize}
              disabled
            />
            <InputHidden
              type="file"
              accept={accept}
              {...defaultProps}
              onChange={onChange}
              id={id}
            />
            <BtnBrowse htmlFor={id}>
              {value ? (
                <img src={IconClose} alt="browse image" />
              ) : (
                <img src={IconUpload} alt="browse image" />
              )}
            </BtnBrowse>
            {children}
            {addonAfter && <InputAfter>{addonAfter}</InputAfter>}
          </RelativeDivRow>
          {error && <InputError>{error}</InputError>}
          {subtext && <InputSub>{subtext}</InputSub>}
        </RelativeDivCol>
      );
    }
    return <InputText {...defaultProps} />;
  }
}

File.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.element,
  error: PropTypes.string,
  children: PropTypes.element,
  addonAfter: PropTypes.element,
  fontSize: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  accept: PropTypes.string
};

File.defaultProps = {
  label: "",
  tooltip: null,
  error: "",
  children: null,
  addonAfter: null,
  value: "",
  type: "file",
  onChange: null,
  subtext: "",
  accept: "*"
};

const BtnBrowse = Styled.label`
  display: block;
  width: max-content;
  width: 100%;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  img{
    position: absolute;
    right: 0;
  }
`;

const InputHidden = Styled.input`
  opacity:0;
  position: absolute;
  pointer-events: none;
`;

const RelativeDivCol = Styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RelativeDivRow = Styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const InputLabel = Styled.label`
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

const InputText = Styled.input`
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
  border: 2px solid #E3E8EE;
  font-size: ${props => props.fontSize || `14px`};
  position: relative;
  ${props => props.readOnly && `background-color: ${NV.color1}`};
  ::placeholder {
    font-size: ${props => props.fontSize || `14px`};
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: revert;
    letter-spacing: normal;
  }
  :focus {
    border: 2px solid ${NV.color2};
  }
`;

const InputAfter = Styled.div`
  position: absolute;
  right: 0;
`;

const InputError = Styled(InputLabel)`
  font-size: 12px;
  font-weight: 500;
  color: ${NV.color8};
  margin-bottom: 5px;
  text-align: right;
  padding-right: 5px;
`;

const InputSub = Styled(InputLabel)`
  font-size: 12px;
  font-weight: 500;
  color: ${NV.color11};
  margin-bottom: 5px;
  text-align: right;
  padding-right: 5px;
`;
