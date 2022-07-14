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

const RegisterForm = (props) => (
  <Card
    as="form"
    {...props}
  >
    <Heading textAlign="center" size={['md', 'lg']}>Sign Up</Heading>

    <FormControl mt="4">
      <FormLabel htmlFor="username">Username</FormLabel>
      <Input id="name" type="text" autoComplete="off" />
    </FormControl>

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
        Sign Up
      </Button>
    </Box>
  </Card>
);

export default RegisterForm;
