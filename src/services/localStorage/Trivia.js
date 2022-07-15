import CONFIG from '../../global/CONFIG';

const Trivia = {
  getTrivias() {
    return JSON.parse(localStorage.getItem(CONFIG.TRIVIA_KEY)) || null;
  },
  saveTrivias(trivias) {
    localStorage.setItem(CONFIG.TRIVIA_KEY, JSON.stringify(trivias));
  },
  clearTrivias() {
    localStorage.removeItem(CONFIG.TRIVIA_KEY);
  },
};

export default Trivia;
