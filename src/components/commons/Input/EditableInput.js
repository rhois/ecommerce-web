import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Text";

const EditableInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  display: block;
  width: 100%;

  input {
    width: 100%;
    padding-right: 30px;
  }

  .icon {
    display: inline-block;
    margin-left: -20px;
    margin-top: 10px;
  }
`;

export default class EditableInput extends Component {
  render() {
    return (
      <EditableInputWrapper>
        <Input type="text" {...this.props}>
          <div className="icon">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path
                d="M8.70711 1.70711C9.09763 1.31658 9.09763 0.683418 8.70711 0.292893C8.31658 -0.0976309 7.68342 -0.097631 7.29289 0.292893L8.70711 1.70711ZM7.29289 0.292893L6.29289 1.29289L7.70711 2.70711L8.70711 1.70711L7.29289 0.292893Z"
                fill="#F7F7F7"
              />
              <path
                d="M0.292893 7.29289C-0.0976314 7.68342 -0.097632 8.31658 0.292892 8.70711C0.683417 9.09763 1.31658 9.09763 1.70711 8.70711L0.292893 7.29289ZM5.29289 2.29289L0.292893 7.29289L1.70711 8.70711L6.70711 3.70711L5.29289 2.29289Z"
                fill="#F7F7F7"
              />
            </svg>
          </div>
        </Input>
      </EditableInputWrapper>
    );
  }
}
