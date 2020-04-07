import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Color } from "theme/Setting";

const propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

const defaultProps = {
  label: "",
  placeholder: "",
  error: "",
  height: "auto",
  width: "100%",
  value: "",
  name: "",
  id: "",
  disabled: false
};

function TextArea(props) {
  const {
    label,
    placeholder,
    error,
    height,
    width,
    onChange,
    name,
    value,
    id,
    disabled
  } = props;

  return (
    <TextAreaStyle height={height} width={width}>
      <label>{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={error ? "error" : ""}
        value={value}
        disabled={disabled}
      >
        {value}
      </textarea>
      {error && <span className="error-message">{error}</span>}
    </TextAreaStyle>
  );
}

const TextAreaStyle = styled.div`
  label {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    display: block;
    position: relative;
    color: ${Color.secondary1};
    margin-top: 10px;
    margin-bottom: 10px;
  }
  textarea {
    color: ${Color.secondary1};
    border-radius: 8px;
    border: 2px solid ${Color.secondary2};
    background: transparent;
    padding: 10px;
    resize: none;
    height: ${({ height }) => height || "200px"};
    width: ${({ width }) => width || `100%`};
    &::placeholder {
      color: ${Color.secondary1};
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${Color.secondary1};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${Color.secondary1};
    }
    &:focus {
      border: 2px solid ${Color.primary1};
    }
    &.error {
      border: 2px solid #f36b86;
    }
  }
  .error-message {
    color: #ff5883;
    display: block;
    font-size: 12px;
    margin-top: 0.2778vw;
  }
`;

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;
export default TextArea;
