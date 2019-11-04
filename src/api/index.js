import axios from 'axios';

const BASE_URL = process.env.GATSBY_API_URL;

export const baptismForm = async fields => {
  return await axios({
    method: 'POST',
    url: `${BASE_URL}send`,
    data: fields,
  });
};
