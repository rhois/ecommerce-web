import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "components/commons/Dropdown";
import InputText from "./Text";

const propTypes = {
  toggleDropdown: PropTypes.bool,
  menu: PropTypes.element
};

const defaultProps = {
  value: false,
  menu: <div />
};

export default function InputDropDown(props) {
  const [dropdownTrigger, setDropdownTrigger] = useState(false);
  const dropdownRef = useRef(null);
  const { menu, toggleDropdown } = props;
  useEffect(() => {
    setDropdownTrigger(!dropdownTrigger);
  }, [toggleDropdown]);

  useEffect(() => {
    dropdownRef.current.click();
  }, [dropdownTrigger]);
  return (
    <div>
      <InputText {...props} />
      <Dropdown overlay={menu} width="100%">
        <button ref={dropdownRef} style={{ display: "none" }} />
      </Dropdown>
    </div>
  );
}

InputDropDown.propTypes = propTypes;
InputDropDown.defaultProps = defaultProps;
