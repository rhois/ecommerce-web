import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import BackgroundPage from "components/commons/BackgroundPage";
import Footer from "components/commons/Footer";
import Input from "components/commons/Input";
import Text from "components/commons/Text";
import Button from "components/commons/Button";
import SearchIcon from "assets/icon/search.svg";
import Heart from "assets/icon/heart.svg";
import HeartFull from "assets/icon/heart-full.svg";
import styled from "styled-components";
import { getProduct } from "api/product";

export default function HomePage(props) {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then(result => {
      setCategory(result[0].data.category);
      setProduct(result[0].data.productPromo);
    });
  }, []);

  const handleEnter = useCallback(event => {
    if (event.keyCode === 13) {
      props.history.push({
        pathname: "/search",
        state: { product }
      });
    }
  });

  function handleSearch(term) {
    props.history.push({
      pathname: "/search",
      state: { product: term }
    });
  }

  return (
    <BackgroundPage padding="15px">
      <BoxSearch>
        <Home>
          <Button
            type="secondary"
            onClick={() => handleSearch(product)}
            style={{ background: "#372463", color: "#fff", marginLeft: 20 }}
          >
            Search
          </Button>
        </Home>
        <Input
          icon={SearchIcon}
          alt="Search"
          onKeyUp={handleEnter}
          style={{ paddingLeft: 35 }}
        />
      </BoxSearch>
      <BoxCategory>
        {category.length > 0 &&
          category.map(res => (
            <ItemCategory key={res.id}>
              <Category>
                <img src={res.imageUrl} />
              </Category>
              <Text>{res.name}</Text>
            </ItemCategory>
          ))}
      </BoxCategory>
      <Card>
        {product.length > 0 &&
          product.map(res => {
            let loved = (
              <a>
                <img src={Heart} alt="Like" />
              </a>
            );
            if (res.loved === 1) {
              loved = (
                <a>
                  <img src={HeartFull} alt="Like" />
                </a>
              );
            }
            return (
              <CardItems key={res.id}>
                <BoxImage
                  onClick={() =>
                    props.history.push({
                      pathname: `product-detail/${res.title}`,
                      state: { detail: res }
                    })
                  }
                >
                  <img src={res.imageUrl} />
                  {loved}
                </BoxImage>
                <Text size={20}>{res.title}</Text>
              </CardItems>
            );
          })}
      </Card>
      <Footer {...props} />
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

const Category = styled.div`
  max-width: 96px;
  img {
    width: 100%;
  }
`;

const ItemCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  width: 150px;
  min-width: 150px;
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
  cursor: pointer;
  a {
    position: absolute;
    left: 5px;
    bottom: 5px;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
`;
