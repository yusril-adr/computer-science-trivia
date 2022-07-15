import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Services
import Auth from '../../services/firebase/authentication';

// Validator
import signInValidator from '../../validator/signIn';

// Components
import Card from '../Card';
import Alert from '../Alert';
import Token from '../../services/localStorage/Token';

const LoginForm = (props) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [validateError, setvalidateError] = useState(null);
  const [alert, setAlert] = useState({
    isLoading: false,
    message: null,
  });

  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const validateErrorResult = signInValidator(formValues);
      setvalidateError(validateErrorResult);

      if (Object.keys(validateErrorResult).length === 0) {
        setAlert({
          isLoading: true,
          message: 'Signing In ...',
        });

        const credentials = await Auth.signIn(formValues.email, formValues.password);

        Token.saveToken(await credentials.user.getIdToken());

        setvalidateError(null);
        setAlert({
          isLoading: false,
          message: 'Sign In Success.',
          onConfirm: () => navigate('/'),
        });
      }
    } catch (error) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        setAlert({
          isLoading: false,
          message: 'Email or password is Invalid',
        });
      } else {
        // eslint-disable-next-line no-console
        console.log(error);
        setAlert({
          isLoading: false,
          message: 'Something went wrong !',
        });
      }
    }
  };

  return (
    <Card
      as="form"
      onSubmit={handleSignIn}
      {...props}
    >
      <Heading textAlign="center" size={['md', 'lg']}>Log In</Heading>
      <FormControl mt="4" isInvalid={validateError?.email}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          onChange={handleInputChange}
          value={formValues.email}
          id="email"
          type="email"
          name="email"
          autoComplete="off"
        />
      </FormControl>

      <FormControl mt="4" isInvalid={validateError?.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          onChange={handleInputChange}
          value={formValues.password}
          id="password"
          type="password"
          name="password"
        />
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

      <Alert {...alert} />
    </Card>
  );
};

export default LoginForm;
