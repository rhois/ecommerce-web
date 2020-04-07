import React from "react";
import PropTypes from "prop-types";

import Text from "./Text";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import CheckBox from "./CheckBox";
import RadioButton from "./InputRadio";
import InputPassword from "./InputPassword";

class Input extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    type: ""
  };

  render() {
    const { type } = this.props;
    switch (type) {
      case "textarea": {
        return <TextArea {...this.props} />;
      }
      case "dropdown": {
        return <DropDown {...this.props} />;
      }
      case "checkbox": {
        return <CheckBox {...this.props} />;
      }
      case "radio": {
        return <RadioButton {...this.props} />;
      }
      default: {
        return <Text {...this.props} />;
      }
    }
  }
}

export const PasswordToggled = props => <InputPassword {...props} />;
export default Input;
