import React from "react";
import PropTypes from "prop-types";
import BackgroundPage from "components/commons/BackgroundPage";
import Button from "components/commons/Button";
import Text from "components/commons/Text";
import styled from "styled-components";
import BackIcon from "assets/icon/back.svg";
import ShareIcon from "assets/icon/share.svg";
import Heart from "assets/icon/heart.svg";
import FBShareIcon from "assets/icon/share/facebook.svg";
import TwitterShareIcon from "assets/icon/share/twitter.svg";
import LinkedinShareIcon from "assets/icon/share/linkedin.svg";

export default function DetailProductPage(props) {
  return (
    <BackgroundPage padding="15px">
      <BoxImage>
        <Back onClick={() => props.history.goBack()}>
          <img src={BackIcon} alt="Home" />
        </Back>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
          }
        />
        <button>
          <img src={ShareIcon} alt="share" />
        </button>
        <Share>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FBShareIcon} alt="facebook" />
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/home?status=`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterShareIcon} alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinShareIcon} alt="linkedin" />
            </a>
          </li>
        </Share>
      </BoxImage>
      <BoxTitle>
        <Text size={25}>Ini nama barang satu</Text>
        <a href="#">
          <img src={Heart} alt="Like" />
        </a>
      </BoxTitle>
      <Text>Lorem ipsum dolor sit amet</Text>
      <Buy>
        <Text>$400</Text>
        <Button
          type="secondary"
          onClick={() => {}}
          style={{ background: "#372463", color: "#fff", marginLeft: 20 }}
        >
          Buy
        </Button>
      </Buy>
    </BackgroundPage>
  );
}

DetailProductPage.propTypes = {
  history: PropTypes.object.isRequired
};

const BoxImage = styled.div`
  position: relative;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  > a {
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 10;
  }
  > img {
    width: 100%;
  }
  > button {
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

const Back = styled.a`
  cursor: pointer;
  margin-right: 10px;
`;

const Share = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  right: 10px;
  margin: 0;
  padding: 0;
  z-index: 10;
  display: none;
`;

const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const Buy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
