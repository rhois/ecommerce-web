import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Color } from "theme/Setting";
import SelectInput from "react-select";

const customStyles = {
  menu: provided => ({
    ...provided,
    width: "100%",
    backgroundColor: "#ffffff",
    marginTop: -5
  }),

  option: () => ({
    height: 40,
    display: "flex",
    alignItems: "center",
    paddingLeft: 13,
    color: "#616871",
    ":hover": {
      backgroundColor: "#E3E8EE"
    }
  }),

  control: provided => ({
    ...provided,
    width: "100%",
    backgroundColor: "transparent",
    height: 40,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E3E8EE",
    boxShadow: "none",
    color: "#E3E8EE",
    ":hover": {
      borderColor: "#E3E8EE"
    }
  }),

  singleValue: () => ({
    color: "#616871"
  }),

  input: () => ({
    color: "#E5E5E5"
  })
};

export default function Select({
  option,
  label,
  error,
  name,
  value,
  onChange
}) {
  const indexInput = option.findIndex(x => x.value === value);
  const handleChange = selectedOption => {
    onChange({ target: { value: selectedOption.value } });
  };
  return (
    <WrapSelect>
      {label && <InputLabel>{label}</InputLabel>}
      <SelectInput
        options={option}
        styles={customStyles}
        error={error}
        value={option[indexInput]}
        name={name}
        onChange={handleChange}
      />
      {error && <InputError>{error}</InputError>}
    </WrapSelect>
  );
}

Select.propTypes = {
  option: PropTypes.array,
  label: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any
};

Select.defaultProps = {
  option: [],
  label: "",
  style: {},
  error: "",
  onChange: () => {},
  name: "",
  value: ""
};

const WrapSelect = styled.div`
  display: block;
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

const InputError = styled(InputLabel)`
  font-size: 12px;
  font-weight: 500;
  color: ${Color.inlineError};
`;
