import {
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

const Card = ({ children, ...props }) => {
  const cardColor = useColorModeValue('white', 'gray.700');

  return (
    <Box
      bgColor={cardColor}
      px={[4, 6]}
      py={[6, 9]}
      borderRadius="md"
      boxShadow="lg"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
