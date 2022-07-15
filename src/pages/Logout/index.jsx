import {
  Navigate,
} from 'react-router-dom';

const SignOut = () => {
  // eslint-disable-next-line no-unused-vars
  const user = false;

  return (<Navigate to="/login" replace />);
};

export default SignOut;
