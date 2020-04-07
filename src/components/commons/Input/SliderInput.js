import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Slider, { createSliderWithTooltip } from "rc-slider";
import { Color, NV } from "nodeflux-design-system";
import "rc-slider/assets/index.css";

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default function SliderInput(props) {
  const { label, error, value, minValue, maxValue, suffix } = props;
  const [data, setData] = useState(value);
  return (
    <div style={{ display: "block" }}>
      <LabelArea>
        <InputLabel>{label}</InputLabel>
        <ValuePreview>
          {data}
          {suffix}
        </ValuePreview>
      </LabelArea>
      <SliderWithTooltip
        defaultValue={data}
        min={minValue}
        max={maxValue}
        onChange={e => setData(e)}
        railStyle={{
          backgroundColor: "transparent",
          height: 16,
          border: "2px solid #372463",
          borderRadius: 8
        }}
        trackStyle={{
          backgroundColor: "#3DD9AD",
          height: 16
        }}
        handleStyle={{
          height: 40,
          width: 40,
          borderRadius: 8,
          backgroundColor: "#4995E9",
          border: "none",
          marginTop: -12
        }}
      />
      {error && <InputError>{error}</InputError>}
    </div>
  );
}

SliderInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  suffix: PropTypes.string
};

SliderInput.defaulProps = {
  error: "",
  suffix: ""
};

const LabelArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ValuePreview = styled.div``;

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
  color: ${NV.color6};
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputError = styled(InputLabel)`
  font-size: 12px;
  font-weight: 500;
  color: ${Color.inlineError};
`;
