import axios from 'axios';

const BASE_URL = process.env.GATSBY_API_URL;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const baptismForm = async fields => {
  return await axios({
    method: 'POST',
    url: `${BASE_URL}send`,
    data: fields,
  });
};
