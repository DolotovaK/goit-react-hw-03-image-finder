import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30769395-e644794823576604d31051598';

export async function getPictures(query, page) {
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&per_page=12&q=${query}&page=${page}}&image_type=photo&orientation=horizontal`
  );
  return response;
}
