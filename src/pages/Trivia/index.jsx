import {
  Box,
  Button,
} from '@chakra-ui/react';
import {
  Navigate,
  Link as RouteLink,
} from 'react-router-dom';
import {
  useSelector,
} from 'react-redux';

// Components
import TriviaTimer from '../../components/TriviaTimer';
import TriviaQA from '../../components/TriviaQA';
import TriviaQASkeleton from '../../components/TriviaQASkeleton';

const Trivia = () => {
  const {
    list,
    isLoading,
  } = useSelector((state) => state.trivia);

  if (list.length === 0 && !isLoading) {
    return (<Navigate to="/" replace />);
  }

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        minW={[290, 300, 450]}
        display="flex"
        flexDir="column"
      >
        {!isLoading && (
          <>
            <TriviaTimer />

            <TriviaQA />
          </>
        )}

        {isLoading && (
          <TriviaQASkeleton />
        )}

        <Box
          mt="4"
          display="flex"
          justifyContent="space-between"
        >
          <Button
            as={RouteLink}
            to="/"
            colorScheme="red"
          >
            Reset
          </Button>

          <Button
            colorScheme="orange"
          >
            Skip
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Trivia;
