import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Components
import Card from '../Card';
import Alert from '../Alert';

// Services
import Auth from '../../services/firebase/authentication';

// Validator
import signUpValidator from '../../validator/signUp';

const SignUpForm = (props) => {
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const validateErrorResult = signUpValidator(formValues);
      setvalidateError(validateErrorResult);

      if (Object.keys(validateErrorResult).length === 0) {
        setAlert({
          isLoading: true,
          message: 'Signing Up ...',
        });

        await Auth.signUp(formValues);

        setvalidateError(null);
        setAlert({
          isLoading: false,
          message: 'Sign Up Success.',
          onConfirm: () => navigate('/login'),
        });
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setAlert({
          isLoading: false,
          message: 'Email already in use !',
        });
      } else {
        setAlert({
          isLoading: false,
          message: 'Something went wrong !',
        });
      }
    }
  };

  return (
    <Card as="form" onSubmit={handleSignUp} {...props}>
      <Heading textAlign="center" size={['md', 'lg']}>Sign Up</Heading>

      <FormControl mt="4" isInvalid={validateError?.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          onChange={handleInputChange}
          value={formValues.email}
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          required
        />
        {validateError?.email && <FormErrorMessage>{validateError?.email}</FormErrorMessage>}
      </FormControl>

      <FormControl mt="4" isInvalid={validateError?.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          onChange={handleInputChange}
          value={formValues.password}
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          required
        />
        {validateError?.password && <FormErrorMessage>{validateError?.password}</FormErrorMessage>}
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

      <Alert {...alert} />
    </Card>
  );
};

export default SignUpForm;
