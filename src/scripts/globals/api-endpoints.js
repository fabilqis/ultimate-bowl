import CONFIG from './config';
 
const API_ENDPOINT = {
  MENU: `${CONFIG.BASE_URL}/list`,
  SEARCH: `${CONFIG.BASE_URL}/search?q=query`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
};
 
export default API_ENDPOINT;
