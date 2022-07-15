import { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

// Routes
import ProtectedRoutes from './routes/ProtectedRoutes';

// Layouts
import Layout from './layouts';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import Trivia from './pages/Trivia';
import Result from './pages/Result';

// Services
import { auth } from './services/firebase/config';
import Auth from './services/firebase/authentication';
import Token from './services/localStorage/Token';
import { updateUser } from './services/redux/User';

const App = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const initUser = async () => {
      const token = Token.getToken();

      if (token) {
        await Auth.signInToken(token);
      }
    };

    auth.onAuthStateChanged((changedUser) => {
      if (changedUser) {
        dispatch(updateUser(changedUser.toJSON()));
      } else {
        dispatch(updateUser(null));
        Token.removeToken();
      }
    });

    initUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={user ? <Dashboard /> : <Navigate to="/login" />} />

        <Route
          element={
            <ProtectedRoutes redirectPath="/login" allowedBy={user} />
          }
        >
          <Route path="logout" element={<Logout />} />
          <Route
            path="trivia"
            element={<Trivia />}
          />
          <Route
            path="result"
            element={<Result />}
          />
        </Route>

        <Route
          element={<ProtectedRoutes redirectPath="/" allowedBy={!user} />}
        >
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
