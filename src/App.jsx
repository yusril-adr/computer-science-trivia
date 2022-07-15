import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Routes
import ProtectedRoutes from './routes/ProtectedRoutes';

// Layouta
import Layout from './layouts';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import Trivia from './pages/Trivia';
import Result from './pages/Result';

const App = () => {
  const user = true;

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
