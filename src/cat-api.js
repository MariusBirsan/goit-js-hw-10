import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_2rRQixpoGjHZTQGHkEbeCMEG869CgmPCrN7kqcXEd8pqey4mN9nDQmUSITSDrdxO';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get('/breeds').then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}