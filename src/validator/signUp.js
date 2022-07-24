import Regex from '../utils/Regex';

export default (values) => {
  const errors = {};
  if (!values.email?.trim()) {
    errors.email = 'Email is required.';
  }
  if (!(Regex.email.test(values.email))) {
    errors.email = 'Email is invalid.';
  }

  if (!values.password?.trim()) {
    errors.password = 'Password is required.';
  }
  if (values.password?.trim().length < 8) {
    errors.password = 'Password must at least 8 character.';
  }

  return errors;
};
