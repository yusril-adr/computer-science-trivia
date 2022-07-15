import { useEffect } from 'react';
import {
  Navigate,
} from 'react-router-dom';

// Services
import Auth from '../../services/firebase/authentication';

const SignOut = () => {
  useEffect(() => {
    const logout = async () => {
      await Auth.signOut();
    };

    logout();
  }, []);

  return (<Navigate to="/login" replace />);
};

export default SignOut;
