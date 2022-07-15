import CONFIG from '../../global/CONFIG';

const Timer = {
  getTimer() {
    return parseInt(localStorage.getItem(CONFIG.TIMER_KEY)) || null;
  },
  saveTimer(trivias) {
    localStorage.setItem(CONFIG.TIMER_KEY, JSON.stringify(trivias));
  },
  cleatTimer() {
    localStorage.removeItem(CONFIG.TIMER_KEY);
  },
};

export default Timer;
