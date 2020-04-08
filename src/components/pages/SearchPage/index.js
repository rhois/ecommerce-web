import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackgroundPage from "components/commons/BackgroundPage";
import Text from "components/commons/Text";
import Input from "components/commons/Input";
import SearchIcon from "assets/icon/search.svg";
import BackIcon from "assets/icon/back.svg";

export default function SearchPage(props) {
  const [search, setSearch] = useState("baju");

  const { product } = props.location.state;

  return (
    <BackgroundPage padding="15px">
      <BoxSearch>
        <Back onClick={() => props.history.goBack()}>
          <img src={BackIcon} alt="Home" />
        </Back>
        <Input
          icon={SearchIcon}
          alt="Search"
          style={{ paddingLeft: 35 }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </BoxSearch>
      {search !== "" && (
        <SearchResult>
          {product.map(res => (
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
      )}
    </BackgroundPage>
  );
}

SearchPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

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
