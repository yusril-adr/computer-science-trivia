import {
  useSelector,
} from 'react-redux';
import {
  Box,
  Button,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  Navigate,
  Link as RouteLink,
} from 'react-router-dom';

// Components
import Card from '../../components/Card';

const Result = () => {
  const {
    list,
    isLoading,
  } = useSelector((state) => state.trivia);

  if (list.length === 0 && !isLoading) {
    return (<Navigate to="/" replace />);
  }

  const totalLength = list.length;
  const answered = list.filter((trivia) => trivia.answered).length;
  const correctAnswered = list.filter((trivia) => (
    trivia.answered === trivia.correct_answer
  )).length;
  const wrongAnswered = list.filter((trivia) => (
    trivia.answered && trivia.answered !== trivia.correct_answer
  )).length;
  const score = (correctAnswered / totalLength) * 100;

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="100%"
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={[2, 8]}
        mt="6"
      >
        <GridItem
          as={Card}
          px={[2, 6]}
          py={[6, 9]}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="xl"
          >
            {correctAnswered}
          </Text>

          <Text
            fontSize="xl"
          >
            Correct
          </Text>
        </GridItem>

        <GridItem
          as={Card}
          px={[2, 6]}
          py={[6, 9]}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="xl"
          >
            {wrongAnswered}
          </Text>

          <Text
            fontSize="xl"
          >
            Wrong
          </Text>
        </GridItem>

        <GridItem
          as={Card}
          px={[2, 6]}
          py={[6, 9]}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="xl"
          >
            {answered}
          </Text>

          <Text
            fontSize="xl"
          >
            Answered
          </Text>
        </GridItem>

        <GridItem
          as={Card}
          px={[2, 6]}
          py={[6, 9]}
          colSpan={3}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="xl"
          >
            {score}
          </Text>

          <Text
            fontSize="xl"
          >
            Score
          </Text>
        </GridItem>

        <GridItem
          as={RouteLink}
          to="/"
          colSpan={3}
        >
          <Button
            px={[2, 6]}
            py={[6, 9]}
            w="100%"
            colorScheme="blue"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Back
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Result;
