import React from "react";
import Styled from "styled-components";
import { Color } from "theme/Setting";
import PropTypes from "prop-types";
import Text from "components/commons/Text";

function HeaderFullscreen({ icon, title, type, actions }) {
  return (
    <TitleBar type={type}>
      {icon}
      <Text className="title" color={Color.secondary1} weight="bold">
        {title}
      </Text>
      <ActionsLayout>{actions}</ActionsLayout>
    </TitleBar>
  );
}

export default HeaderFullscreen;

HeaderFullscreen.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  actions: PropTypes.element
};

HeaderFullscreen.defaultProps = {
  type: "primary"
};

const ActionsLayout = Styled.div`
  display: flex;
  *{
    :not(:last-child){
      margin-right: 10px;
    }
  }
`;

const TitleBar = Styled.div`
  width: 100%;
  height: 48px;
  border-bottom: solid 1px ${Color.secondary2};
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  position: relative;
  ${({ type }) =>
    type === "secondary" &&
    `
  justify-content: space-between;
  background-color: ${Color.primary1};
  z-index: 110;
  .title{
    width: 100%;
    text-align: center;
    margin-left: -48px;
  }
  `};

  .title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
  }
  img{
    cursor: pointer;
    z-index: 100;
  }
`;
