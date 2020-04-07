/* eslint-disable react/no-string-refs */
import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Datepicker from "react-datepicker";
import PropTypes from "prop-types";
import { addDays } from "date-fns";
import { NV } from "nodeflux-design-system";
import Button from "components/commons/Button";
import Row from "components/commons/Row";

import Input from "./Text";

const DateNative = new Date();

const DatePickerWrap = styled.div`
  width: 100%;
  .react-datepicker__input-container {
    .react-datepicker__close-icon {
      top: 20px;
      ::after {
        background-color: ${NV.color2} !important;
      }
    }
    display: block;
  }
  .react-datepicker-popper {
    z-index: 10000;
  }
  .react-datepicker-wrapper {
    display: block;
  }
  .react-datepicker {
    background-color: ${NV.color19};
    border: none;
    box-shadow: 0 4px 47px 10px rgba(122, 76, 164, 0.1);
    font-family: "Barlow", sans-serif;
    font-size: 14px;
    display: grid;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    border-radius: 8px;
    line-height: normal;
    letter-spacing: normal;
    padding: 10px;
    .react-datepicker__day--keyboard-selected {
      border-radius: 8px;
      background-color: ${NV.color2};
      color: ${NV.color17} !important;
    }
    .react-datepicker__navigation {
      border: solid ${NV.color17};
      border-width: 0 1.5px 1.5px 0;
      top: 28px;
      :focus {
        outline: none;
      }
    }
    .react-datepicker__navigation--previous {
      transform: rotate(135deg);
      left: 30px;
    }
    .react-datepicker__navigation--next {
      transform: rotate(-45deg);
      right: 30px;
    }
    .react-datepicker__header {
      border-bottom: unset;
      background-color: ${NV.color19};
      .react-datepicker__current-month {
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        margin: 5px 0px 10px;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${NV.color6};
      }
      .react-datepicker__day-name {
        color: ${NV.color6};
      }
    }
    .react-datepicker__month {
      .react-datepicker__day--disabled {
        color: ${NV.color1};
      }
    }
    .react-datepicker__day {
      color: ${NV.color17};
      :hover {
        border-radius: 8px;
        color: ${NV.color6};
        background-color: ${NV.color1};
      }
    }
    .react-datepicker__day--in-selecting-range {
      border-radius: 8px;
      background-color: ${NV.color2};
    }
    .react-datepicker__day--in-range {
      border-radius: 8px;
      background-color: ${NV.color2};
      color: ${NV.color17};
    }
    .react-datepicker__day--outside-month {
      color: ${NV.color1};
    }
    .react-datepicker__day--selected {
      border-radius: 8px;
      background-color: ${NV.color2};
      color: ${NV.color17};
    }
    .react-datepicker__day--today {
      font-weight: unset;
    }
    .react-datepicker__triangle {
      border-bottom-color: ${NV.color19};
      ::before {
        border-bottom-color: ${NV.color19};
      }
    }
  }
`;

export default class DatePicker extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    onSubmit: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object,
    time: PropTypes.bool,
    selectsStart: PropTypes.bool,
    selectsEnd: PropTypes.bool,
    dropdownMode: PropTypes.string,
    showMonthDropdown: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    startDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    endDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    minHours: PropTypes.string,
    popperPlacement: PropTypes.string
  };

  static defaultProps = {
    value: "",
    label: "",
    placeholder: "",
    name: "",
    style: {},
    time: false,
    selectsStart: false,
    selectsEnd: false,
    dropdownMode: "",
    showMonthDropdown: false,
    showYearDropdown: false,
    startDate: "",
    endDate: "",
    minHours: "",
    popperPlacement: ""
  };

  constructor(props) {
    super(props);

    this.state = {
      // for single
      startDate: props.value || new Date(),
      startHoursDate: this.addZero(DateNative.getHours()),
      startMinuteDate: this.addZero(DateNative.getMinutes())
    };
  }

  addZero = i => {
    if (i < 10 || i.length < 2) {
      // eslint-disable-next-line no-param-reassign
      i = `0${i}`;
    }
    return i;
  };

  changeTime = e => {
    if (e.target.value.length < 4) {
      if (e.target.name === "starthour") {
        this.setState({
          startHoursDate:
            e.target.value.length > 2
              ? this.addZero(e.target.value.slice(1))
              : this.addZero(e.target.value)
        });
      }
      if (e.target.name === "startminute") {
        this.setState({
          startMinuteDate:
            e.target.value.length > 2
              ? this.addZero(e.target.value.slice(1))
              : this.addZero(e.target.value)
        });
      }
    }
  };

  changeDate = date => {
    this.setState(
      {
        startDate: date
      },
      () => {
        const { startDate, startHoursDate, startMinuteDate } = this.state;
        if (startDate) {
          startDate.setHours(startHoursDate);
          startDate.setMinutes(startMinuteDate);
        }
        const { name, onSubmit, value } = this.props;
        onSubmit(name, startDate, value);
      }
    );
  };

  resultDate = () => {
    const { startDate, startHoursDate, startMinuteDate } = this.state;
    const { name, onSubmit, value } = this.props;
    const handleDateEmpty = startDate || new Date();
    handleDateEmpty.setHours(startHoursDate);
    handleDateEmpty.setMinutes(startMinuteDate);
    this.setState(
      {
        startDate: handleDateEmpty
      },
      () => {
        const { startDate: dateSubmit } = this.state;
        onSubmit(name, dateSubmit || new Date(), value);
        this.refs[name].setOpen(false);
        this.refs[name].isCalendarOpen(() => false);
      }
    );
  };

  render() {
    const { startHoursDate, startMinuteDate } = this.state;
    const {
      value,
      label,
      placeholder,
      name,
      time,
      style,
      selectsStart,
      selectsEnd,
      startDate,
      endDate,
      minHours,
      dropdownMode,
      showMonthDropdown,
      popperPlacement,
      showYearDropdown
    } = this.props;
    let conditionalDate = {};
    let minH = {};
    let input = {};
    const equalsStartDate =
      startDate &&
      `${startDate.getDate()}${startDate.getMonth()}${startDate.getFullYear()}`;
    const equalsEndDate =
      endDate &&
      `${endDate.getDate()}${endDate.getMonth()}${endDate.getFullYear()}`;
    const generalDate = {
      selectsStart: selectsStart || null,
      selectsEnd: selectsEnd || null,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null
    };
    if (selectsStart) {
      conditionalDate = {
        selected: startDate ? new Date(startDate) : null,
        maxDate: endDate ? addDays(endDate, 0) : addDays(DateNative, 0)
      };
      input = {
        value: new Date(startDate)
      };
    }
    if (selectsEnd) {
      conditionalDate = {
        selected: endDate ? new Date(endDate) : null,
        minDate: startDate ? addDays(startDate, 0) : addDays(DateNative, 0),
        maxDate: addDays(DateNative, 0)
      };
      input = {
        value: new Date(endDate)
      };
      if (equalsStartDate === equalsEndDate) {
        minH = {
          min: minHours
        };
      }
      if (equalsStartDate && equalsEndDate == null) {
        minH = {
          min: minHours
        };
      }
    }
    return (
      <DatePickerWrap>
        <Datepicker
          customInput={
            <Input
              type="text"
              name={name}
              label={label}
              value={value}
              {...input}
              style={style}
            />
          }
          onChange={this.changeDate}
          timeFormat="HH:mm"
          showMonthDropdown={showMonthDropdown}
          showYearDropdown={showYearDropdown}
          dropdownMode={dropdownMode}
          placeholderText={placeholder}
          dateFormat={time ? `dd-MM-yyyy HH:mm` : `dd-MM-yyyy`}
          // eslint-disable-next-line react/no-string-refs
          selected={value ? new Date(value) : null}
          maxDate={addDays(new Date(), 0)}
          {...conditionalDate}
          {...generalDate}
          popperPlacement={popperPlacement}
          ref={name}
          shouldCloseOnSelect={false}
        >
          {time && (
            <Fragment>
              <Row
                width="240px"
                align="center"
                horizontalGap={10}
                style={{
                  marginBottom: 10
                }}
              >
                <Input
                  type="number"
                  label="Hour"
                  name="starthour"
                  value={startHoursDate}
                  onChange={this.changeTime}
                  {...minH}
                  max="23"
                />
                <Input
                  type="number"
                  label="Minute"
                  name="startminute"
                  value={startMinuteDate}
                  onChange={this.changeTime}
                  max="59"
                />
              </Row>
              <Button type="primary" name={name} onClick={this.resultDate}>
                Apply
              </Button>
            </Fragment>
          )}
        </Datepicker>
      </DatePickerWrap>
    );
  }
}
