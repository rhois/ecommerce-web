import Styled from "styled-components";

const Text = Styled.div`
  font-style: normal;
  line-height: 14px;
  ${({ size }) => size && `font-size: ${size}px;`}
  ${({ color }) => color && `color: ${color};`}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`}
  ${({ align }) => align && `text-align: ${align};`}
`;

export default Text;
