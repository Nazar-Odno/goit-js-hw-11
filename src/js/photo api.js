export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39216265-ac2698d47dce7d52008cc85a4';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};