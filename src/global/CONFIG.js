const CONFIG = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  TRIVIA_KEY: 'trivias',
  TIMER_KEY: 'timer',
  TRIVIA_TIME: 60,
  FIREBASE: {
    API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
  },
};

export default CONFIG;
