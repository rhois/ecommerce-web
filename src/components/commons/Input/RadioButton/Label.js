import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

class Label extends Component {
  onChangeHanlder = ({ target: { value } }) => {
    this.props.selectedItem(value);
  };

  render() {
    const { name, id, children, value, selected } = this.props;
    return (
      <Wrapper>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={this.onChangeHanlder}
          checked={selected === value}
        />
        <Text htmlFor={id}>{children || "Null"}</Text>
      </Wrapper>
    );
  }
}

Label.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectedItem: PropTypes.func.isRequired,
  value: PropTypes.string,
  selected: PropTypes.string
};

export default Label;

const Text = Styled.label`
      display: inline-block;
      position: relative;
      margin-left: 15px;
      width: max-content;
      color: "#d8d8ff";
      cursor: pointer;
      text-transform: Capitalize;

        &:after{
          content: '';
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50px;
          background-color: white;
        }
    `;
const Wrapper = Styled.div`
      display: inline-block;
      width: max-content;
      maring-bottom: 10px;
      &:not(:last-child){
        margin-right: 30px;
      }

      input{
        position: absolute;
        left: 0;
        top: 0;
        transform: scale(0);
        visible: hidden;
      }

      input:checked + label:after{
        background: rgba(255,117,168,1);
        background: -moz-linear-gradient(left, rgba(255,117,168,1) 0%, rgba(255,0,0,1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,117,168,1)), color-stop(100%, rgba(255,0,0,1)));
        background: -webkit-linear-gradient(left, rgba(255,117,168,1) 0%, rgba(255,0,0,1) 100%);
        background: linear-gradient(to right, rgba(255,117,168,1) 0%, rgba(255,0,0,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff75a8', endColorstr='#ff0000', GradientType=1 );
      }
    `;
