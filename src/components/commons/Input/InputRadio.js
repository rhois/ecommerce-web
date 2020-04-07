import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

export default function Radio(value, label, checked, disable, onChange, name) {
  return (
    <Wrapper>
      <Input
        type="radio"
        value={value}
        checked={checked}
        name={name}
        disabled={disable}
        onChange={onChange}
      />
      <Circle />
      <Text>{label}</Text>
    </Wrapper>
  );
}
Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  disable: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string
};
Radio.defaultProps = {
  name: "default"
};

const Wrapper = Styled.label`
  position: relative;
  display: grid;
  grid-template-columns: 16px 1fr;
  grid-gap: 12px;
  cursor: pointer;
  align-items: center;
`;

const Circle = Styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  border: 2px solid #F7F7F7;

  ::after{
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: #4995E9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition-duration: .2s;
  }
`;

const Text = Styled.span`
  color: #E5E5E5;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const Input = Styled.input`
  display: none;
  :checked + ${Circle}{
    border: 2px solid #4995E9;
    ::after{
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
