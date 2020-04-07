import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { pxToVw } from "components/commons/Helper";

class SelectButton extends React.Component {
  static propTypes = {
    selectedOption: PropTypes.string.isRequired,
    selectButType: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    optionType: PropTypes.string.isRequired,
    optionValue: PropTypes.array.isRequired,
    updateUserPreference: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.selectedOption
    };
  }

  onChangeHandler = event => {
    this.props.updateUserPreference(
      this.props.selectButType,
      event.target.value
    );
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <StyledSelectMenu style={{ width: `${pxToVw(this.props.width)}` }}>
        <select
          onChange={this.onChangeHandler}
          value={this.state.value}
          style={{ width: this.props.width }}
        >
          {this.props.optionValue.map((val, index) => {
            if (val === this.props.selectedOption) {
              return (
                <option selected value={val} key={index}>
                  {this.props.selectedOption} {this.props.optionType}
                </option>
              );
            }
            return (
              <option key={index} value={val}>
                {val} {this.props.optionType}
              </option>
            );
          })}
        </select>
      </StyledSelectMenu>
    );
  }
}

export default SelectButton;

const StyledSelectMenu = styled.div`
  select {
    display: flex;
    width: 5.498652291105121vw;
    height: 32px;
    border-radius: 2px;
    background-color: transparent;
    font-family: Dosis;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.5px;
    color: #d8d8ff;
    padding-left: 10px;
    option {
      background-color: #1e164c;
    }
  }
`;
