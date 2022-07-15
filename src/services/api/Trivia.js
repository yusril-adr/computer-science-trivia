// Configuration
import API_ENDPOINT from '../../global/API_ENDPOINT';

// Errors
import APIError from '../../errors/APIError';

const Trivia = {
  async getTrivias() {
    const response = await fetch(API_ENDPOINT.TRIVIA);
    const responseJson = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError('API Server Error.');
    }

    return responseJson.results;
  },
};

export default Trivia;
