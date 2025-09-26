import axios from 'axios';

const apiKey = '51319352-42813f34bc37caf0322d42b73';
const baseUrl = 'https://pixabay.com/api/';

export const fetchImg = query => {
  return axios
    .get(baseUrl, {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    });
};
