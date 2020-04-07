import React from "react";
import Styled, { css } from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import { Color } from "theme/Setting";
import routes from "router";
import CommonLayout from "./CommonLayout";
import requireAuth from "../../authRoute";

function DefaultLayout(props) {
  return (
    <CommonLayout routes={routes} {...props}>
      <Switch>
        {routes.map((route, idx) =>
          route.component ? (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={propsComponent => (
                <Content fullScreen={route.fullscreen}>
                  <route.component {...propsComponent} />
                </Content>
              )}
            />
          ) : null
        )}
        <Redirect from="*" to="/404" />
      </Switch>
    </CommonLayout>
  );
}

const Content = Styled.div`
  width: 100%;
  z-index: 0;
  height: 100%;
  ${({ fullScreen }) =>
    fullScreen &&
    css`
      z-index: 99;
      background-color: ${Color.primary1};
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;
    `}
`;

export default requireAuth(DefaultLayout);
