import React, { useCallback } from "react";
import PropTypes from "prop-types";
import BackgroundPage from "components/commons/BackgroundPage";
import Footer from "components/commons/Footer";
import Input from "components/commons/Input";
import SearchIcon from "assets/icon/search.svg";
import HomeIcon from "assets/icon/home.svg";
import Heart from "assets/icon/heart.svg";
import styled from "styled-components";

export default function HomePage(props) {
  const handleEnter = useCallback(event => {
    if (event.keyCode === 13) {
      props.history.push("/search");
    }
  });

  return (
    <BackgroundPage padding="15px">
      <BoxSearch>
        <Home>
          <img src={HomeIcon} alt="Home" />
        </Home>
        <Input
          icon={SearchIcon}
          alt="Search"
          onKeyUp={handleEnter}
          style={{ paddingLeft: 35 }}
        />
      </BoxSearch>
      <BoxCategory>
        <ItemCategory>
          <img src={"https://img.icons8.com/flat_round/2x/long-shorts.png"} />
          <div>Baju</div>
        </ItemCategory>
        <ItemCategory>
          <img src={"https://img.icons8.com/flat_round/2x/long-shorts.png"} />
          <div>Baju</div>
        </ItemCategory>
        <ItemCategory>
          <img src={"https://img.icons8.com/flat_round/2x/long-shorts.png"} />
          <div>Baju</div>
        </ItemCategory>
        <ItemCategory>
          <img src={"https://img.icons8.com/flat_round/2x/long-shorts.png"} />
          <div>Baju</div>
        </ItemCategory>
        <ItemCategory>
          <img src={"https://img.icons8.com/flat_round/2x/long-shorts.png"} />
          <div>Baju</div>
        </ItemCategory>
      </BoxCategory>
      <Card>
        <CardItems>
          <BoxImage>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
              }
            />
            <a href="#">
              <img src={Heart} alt="Like" />
            </a>
          </BoxImage>
          <div>Ini nama barang satu</div>
        </CardItems>
        <CardItems>
          <BoxImage>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
              }
            />
            <a href="#">
              <img src={Heart} alt="Like" />
            </a>
          </BoxImage>
          <div>Ini nama barang satu</div>
        </CardItems>
        <CardItems>
          <BoxImage>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
              }
            />
            <a href="#">
              <img src={Heart} alt="Like" />
            </a>
          </BoxImage>
          <div>Ini nama barang satu</div>
        </CardItems>
        <CardItems>
          <BoxImage>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg"
              }
            />
            <a href="#">
              <img src={Heart} alt="Like" />
            </a>
          </BoxImage>
          <div>Ini nama barang satu</div>
        </CardItems>
      </Card>
      <Footer />
    </BackgroundPage>
  );
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Home = styled.a`
  cursor: pointer;
  margin-right: 10px;
`;

const BoxCategory = styled.div`
  display: flex;
  margin-bottom: 20px;
  overflow: auto;
`;

const ItemCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
`;

const Card = styled.div`
  padding-bottom: 50px;
`;

const CardItems = styled.div`
  margin-bottom: 20px;
`;

const BoxImage = styled.div`
  position: relative;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  a {
    position: absolute;
    left: 5px;
    bottom: 5px;
  }
  img {
    width: 100%;
  }
`;
