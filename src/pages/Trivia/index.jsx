import {
  Box,
  Button,
  Text,
} from '@chakra-ui/react';
import {
  Navigate,
  Link as RouteLink,
} from 'react-router-dom';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

// Components
import TriviaTimer from '../../components/TriviaTimer';
import TriviaQA from '../../components/TriviaQA';
import TriviaQASkeleton from '../../components/TriviaQASkeleton';

// Services
import { updateTriviaAnswer } from '../../services/redux/Trivia';

const Trivia = () => {
  const {
    list,
    isLoading,
    currentNumber,
  } = useSelector((state) => state.trivia);
  const dispatch = useDispatch();

  const handleAnswer = () => {
    const currentTrivia = list[currentNumber - 1];
    const newList = [...list];
    newList[currentNumber - 1] = {
      ...currentTrivia,
      answered: null,
    };

    dispatch(updateTriviaAnswer(newList));
  };

  if (list.length === 0 && !isLoading) {
    return (<Navigate to="/" replace />);
  }

  if (currentNumber > list.length && !isLoading) {
    return (<Navigate to="/result" />);
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
          mt="8"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            as={RouteLink}
            to="/"
            colorScheme="red"
          >
            Reset
          </Button>

          <Text
            fontSize={['md', 'xl']}
          >
            Answered: {list.filter(({ answered }) => answered).length}/{list.length}
          </Text>

          <Button
            colorScheme="orange"
            onClick={handleAnswer}
          >
            Skip
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Trivia;
