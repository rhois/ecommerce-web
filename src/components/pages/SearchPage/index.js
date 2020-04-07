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
          <SearchItems>
            <BoxImage>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
                }
              />
            </BoxImage>
            <Description>
              <Text size={18} lineHeight={35}>
                Nama Baju 1
              </Text>
              <Text lineHeight={20}>$15</Text>
            </Description>
          </SearchItems>
          <SearchItems>
            <BoxImage>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
                }
              />
            </BoxImage>
            <Description>
              <Text size={18} lineHeight={35}>
                Nama Baju 1
              </Text>
              <Text lineHeight={20}>$15</Text>
            </Description>
          </SearchItems>
          <SearchItems>
            <BoxImage>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
                }
              />
            </BoxImage>
            <Description>
              <Text size={18} lineHeight={35}>
                Nama Baju 1
              </Text>
              <Text lineHeight={20}>$15</Text>
            </Description>
          </SearchItems>
          <SearchItems>
            <BoxImage>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
                }
              />
            </BoxImage>
            <Description>
              <Text size={18} lineHeight={35}>
                Nama Baju 1
              </Text>
              <Text lineHeight={20}>$15</Text>
            </Description>
          </SearchItems>
          <SearchItems>
            <BoxImage>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
                }
              />
            </BoxImage>
            <Description>
              <Text size={18} lineHeight={35}>
                Nama Baju 1
              </Text>
              <Text lineHeight={20}>$15</Text>
            </Description>
          </SearchItems>
        </SearchResult>
      )}
    </BackgroundPage>
  );
}

SearchPage.propTypes = {
  history: PropTypes.object.isRequired
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
`;
const BoxImage = styled.div`
  max-width: 125px;
  margin-right: 20px;
  img {
    width: 100%;
  }
`;
const Description = styled.div``;
