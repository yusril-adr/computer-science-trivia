import {
  Box,
  Text,
  Link,
} from '@chakra-ui/react';
import {
  Link as RouteLink,
} from 'react-router-dom';

// Components
import Card from '../../components/Card';
import SignUpForm from '../../components/SignUpForm';

const SignUp = () => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
  >
    <SignUpForm
      minW={[290, 300, 450]}
    />

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
        Have an account?
      </Text>

      <Link as={RouteLink} color="teal" to="/login">
        Log in
      </Link>
    </Card>
  </Box>
);

export default SignUp;
