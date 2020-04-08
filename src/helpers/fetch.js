import axios from "axios";

const checkStatus = response => {
  if (response.status === 401) {
    window.location.href("/");
  }
  return response.data;
};

const fetch = async (url, method, data) => {
  const isFormData = data instanceof FormData && {
    "Content-Type": "multipart/form-data"
  };

  const Header = {
    headers: isFormData
  };

  const options = {
    url,
    method,
    data,
    ...Header
  };

  const reqData = await axios(options);
  await checkStatus(reqData);
  const result = reqData.data;

  return result;
};

export default fetch;
