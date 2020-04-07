import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Color } from "theme/Setting";
import Input, { PasswordToggled } from "components/commons/Input";
import Button from "components/commons/Button";
import Panel from "components/commons/Panel";
import BackgroundPage from "components/commons/BackgroundPage";
import LogoGoogle from "assets/icon/google.svg";
import LogoFacebook from "assets/icon/facebook.svg";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (username !== "" && password !== "") {
      setDisabled(false);
    }
    if (username === "" || password === "") {
      setDisabled(true);
    }
    if (errMessage !== "") {
      setErrMessage("");
      setIsError(false);
    }
  }, [username, password]);

  return (
    <BackgroundPage container="center">
      <Panel width="275px" shadow>
        <Fragment>
          <Title>LOGIN</Title>
          <FormLayout>
            <Input
              onChange={e => setUsername(e.target.value)}
              onKeyUp={() => {}}
              name="name"
              value={username}
              placeholder="Username"
              error={isError}
            />
            <PasswordToggled
              onChange={e => setPassword(e.target.value)}
              onKeyUp={() => {}}
              name="password"
              value={password}
              placeholder="Password"
              error={errMessage}
            />
            <BoxButton>
              <WrapCheckbox>
                <Input type="checkbox" onChange={() => {}} /> Remember Me
              </WrapCheckbox>

              <Button
                isLoading={isLoading}
                type="secondary"
                onClick={() => {}}
                style={{ background: "#372463", color: "#fff" }}
                disabled={disabled}
              >
                Sign In
              </Button>
            </BoxButton>
            <WrapOr>
              <hr /> or <hr />
            </WrapOr>
            <FacebookLogin
              appId="789191518272705"
              autoLoad={false}
              fields="name,email,picture"
              onClick={() => {}}
              callback={() => {}}
              render={renderProps => (
                <Button
                  type="google"
                  onClick={renderProps.onClick}
                  style={{
                    background: "#4267B2",
                    width: "100%",
                    marginBottom: 15
                  }}
                >
                  <img src={LogoFacebook} alt="Facebook" />
                  Sign in with Facebook
                </Button>
              )}
            />
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CONSOLE_ID}
              render={renderProps => (
                <Button
                  type="google"
                  onClick={renderProps.onClick}
                  style={{
                    boxShadow: "0 2px 20px 2px rgba(213, 77, 64, 0.35)",
                    backgroundImage:
                      "linear-gradient(to right, #d54d40, #a52416)",
                    width: "100%"
                  }}
                >
                  <img src={LogoGoogle} alt="Google" />
                  Sign in with Google
                </Button>
              )}
              buttonText="Login"
              onSuccess={() => {}}
              onFailure={() => {}}
            />
          </FormLayout>
        </Fragment>
      </Panel>
    </BackgroundPage>
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const FormLayout = styled.div`
  margin-top: 28px;
  input {
    margin-bottom: 20px;
  }
  span {
    display: block;
    text-align: center;
    color: ${Color.secondary1};
    font-size: 14px;
    a {
      color: ${Color.primary1};
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;
      margin-left: 5px;
    }
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  display: block;
  color: ${Color.primary1};
  margin: 16px auto 24px auto;
`;

const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapCheckbox = styled.div`
  display: flex;
`;

const WrapOr = styled.div`
  display: flex;
  margin: 10px 0px;
  font-size: 14px;
  margin: 26px 0;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #7a4ca4;
  align-items: center;
  hr {
    width: 100px;
    border: 0.5px solid rgba(122, 76, 164, 0.3);
  }
`;
