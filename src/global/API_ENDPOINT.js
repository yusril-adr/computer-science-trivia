import CONFIG from './CONFIG';

const API_ENDPOINT = {
  QUESTION: CONFIG.API_BASE_URL,
  RESET_TOKEN: `${CONFIG.API_BASE_URL}&command=reset`,
};

export default API_ENDPOINT;
