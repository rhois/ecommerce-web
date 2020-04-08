import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackgroundPage from "components/commons/BackgroundPage";
import Text from "components/commons/Text";
import BackIcon from "assets/icon/back.svg";

function PurchasePage(props) {
  const { purchaseHistory } = props;
  return (
    <BackgroundPage padding="15px">
      <BoxSearch>
        <Back onClick={() => props.history.goBack()}>
          <img src={BackIcon} alt="Back" />
        </Back>
        <Text size={20}>Purchase History</Text>
      </BoxSearch>
      <SearchResult>
        {purchaseHistory.length > 0 &&
          purchaseHistory.map(res => (
            <SearchItems
              key={res.id}
              onClick={() =>
                props.history.push({
                  pathname: `product-detail/${res.title}`,
                  state: { detail: res }
                })
              }
            >
              <BoxImage>
                <img src={res.imageUrl} />
              </BoxImage>
              <Description>
                <Text size={18} lineHeight={35}>
                  {res.title}
                </Text>
                <Text lineHeight={20}>{res.price}</Text>
              </Description>
            </SearchItems>
          ))}
      </SearchResult>
    </BackgroundPage>
  );
}

function mapStateToProps(state) {
  return {
    purchaseHistory: state.purchaseHistory
  };
}

PurchasePage.propTypes = {
  history: PropTypes.object.isRequired,
  purchaseHistory: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(PurchasePage);

const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Back = styled.a`
  cursor: pointer;
  margin-right: 10px;
`;

const SearchResult = styled.div``;
const SearchItems = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
  cursor: pointer;
`;
const BoxImage = styled.div`
  max-width: 125px;
  margin-right: 20px;
  img {
    width: 100%;
  }
`;
const Description = styled.div``;
