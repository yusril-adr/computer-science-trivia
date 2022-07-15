import CONFIG from '../../global/CONFIG';

const Token = {
  getToken() {
    return localStorage.getItem(CONFIG.FIREBASE.USER_TOKEN_KEY);
  },
  saveToken(token) {
    localStorage.setItem(CONFIG.FIREBASE.USER_TOKEN_KEY, token);
  },
  removeToken() {
    localStorage.removeItem(CONFIG.FIREBASE.USER_TOKEN_KEY);
  },
};

export default Token;
