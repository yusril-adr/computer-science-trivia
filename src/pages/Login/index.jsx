import {
  Box,
  Text,
  Link,
} from '@chakra-ui/react';

// Components
import Card from '../../components/Card';
import LoginForm from '../../components/LoginForm';

const Login = () => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
  >
    <LoginForm minW={[290, 300, 450]} />

    <Card
      mt="6"
      minW={[290, 300, 450]}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        me="2"
      >
        Don't have an account?
      </Text>

      <Link href="#" color="teal">
        Sign Up
      </Link>
    </Card>
  </Box>
);

export default Login;
