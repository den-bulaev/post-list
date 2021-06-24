/* eslint-disable import/prefer-default-export */
const BASE_URL = 'https://bloggy-api.herokuapp.com/';

export const request = (endPoint, options) => {
  const url = BASE_URL + endPoint;

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const remove = (endpoint) => {
  const method = { method: 'DELETE' };

  return request(endpoint, method);
};

export const download = (endpoint) => {
  const method = { method: 'GET' };

  return request(endpoint, method);
};
