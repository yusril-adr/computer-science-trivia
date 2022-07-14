import {
  Container,
} from '@chakra-ui/react';
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';

// Global Components
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Result from './pages/Result';

const App = () => (
  <>
    <SkipNavLink zIndex="9999">Skip to content</SkipNavLink>
    <AppBar maxW="5xl" />

    <Container as="main" maxW="5xl" mt="32" minH="calc(80vh - 164px)">
      <SkipNavContent />
      <Result />
    </Container>

    <Footer my="16" />
  </>
);

export default App;
