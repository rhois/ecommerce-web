import fetch from "helpers/fetch";

function getProduct() {
  const url = `https://private-4639ce-ecommerce56.apiary-mock.com/home`;
  return fetch(url, "get").then(result => result);
}

export { getProduct };
