import React, { useState } from "react";
import { connect } from "react-redux";
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
import HeartFull from "assets/icon/heart-full.svg";
import { addPurchase } from "store/actions/purchase";

function DetailProductPage(props) {
  const { dispatch } = props;
  const [socialShare, setSocialShare] = useState(false);
  const [like, setLike] = useState(false);

  const { detail } = props.location.state;

  const handleAddPurchase = items => {
    dispatch(addPurchase([items]));
    // this.setState({ input: "" });
  };

  return (
    <BackgroundPage padding="15px">
      <BoxImage>
        <Back onClick={() => props.history.goBack()}>
          <img src={BackIcon} alt="Home" />
        </Back>
        <img src={detail.imageUrl} />
        <button
          onClick={() => {
            setSocialShare(true);
            if (socialShare) {
              setSocialShare(false);
            }
          }}
        >
          <img src={ShareIcon} alt="share" />
        </button>
        {socialShare && (
          <Share>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FBShareIcon} alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/home?status=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterShareIcon} alt="twitter" />
              </a>
            </li>
            <li>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&${detail.title}&summary=&source=website`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinShareIcon} alt="linkedin" />
              </a>
            </li>
          </Share>
        )}
      </BoxImage>
      <BoxTitle>
        <Text size={25}>{detail.title}</Text>
        {detail.loved === 1 || like ? (
          <a onClick={() => setLike(false)}>
            <img src={HeartFull} alt="Like" />
          </a>
        ) : (
          <a onClick={() => setLike(true)}>
            <img src={Heart} alt="Like" />
          </a>
        )}
      </BoxTitle>
      <Text lineHeight={25} size={18}>
        {detail.description}
      </Text>
      <Buy>
        <Text>{detail.price}</Text>
        <Button
          type="secondary"
          onClick={() => handleAddPurchase(detail)}
          style={{ background: "#372463", color: "#fff", marginLeft: 20 }}
        >
          Buy
        </Button>
      </Buy>
    </BackgroundPage>
  );
}

DetailProductPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(DetailProductPage);

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
`;

const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  a {
    cursor: pointer;
  }
`;

const Buy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
