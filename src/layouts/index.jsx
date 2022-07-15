/* eslint-disable no-unused-vars */
import {
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import {
  Container,
} from '@chakra-ui/react';
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

// Components
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <SkipNavLink zIndex="9999">Skip to content</SkipNavLink>
      <AppBar maxW="5xl" />

      <Container as="main" maxW="5xl" mt="32" minH="calc(80vh - 164px)">
        <SkipNavContent />
        <Outlet />
      </Container>

      <Footer my="16" />
    </>
  );
};

export default AdminLayout;
