import makeRequest from '../httpClient';

export const fetchCatQuotes = () => makeRequest({
  url: 'https://meowfacts.herokuapp.com/?lang=rus&count=25',
  method: 'GET',
}).then(response => {
  console.log('API response for fetchCatQuotes:', response);
  return response.data;
}).catch(error => {
  console.error('Error in fetchCatQuotes:', error);
  throw error;
});