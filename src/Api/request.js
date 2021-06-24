const BASE_URL = 'https://bloggy-api.herokuapp.com/';

const request = (endPoint, options) => {
  const url = BASE_URL + endPoint;

  return fetch(url, options)
    .then((response) => response.json());
};

export default request;
