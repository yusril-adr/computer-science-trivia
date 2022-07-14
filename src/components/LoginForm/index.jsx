import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
} from '@chakra-ui/react';

// Components
import Card from '../Card';

const LoginForm = (props) => (
  <Card
    as="form"
    {...props}
  >
    <Heading textAlign="center" size={['md', 'lg']}>Log In</Heading>
    <FormControl mt="4">
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Input id="email" type="email" autoComplete="off" />
    </FormControl>

    <FormControl mt="4">
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input id="password" type="password" />
    </FormControl>

    <Box
      display="flex"
      justifyContent="center"
      mt="6"
    >
      <Button
        colorScheme="teal"
        type="submit"
      >
        Log In
      </Button>
    </Box>
  </Card>
);

export default LoginForm;
