import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  useColorModeValue,
  Text,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';

// Components
import Card from '../Card';

// Services
import { updateTriviaAnswer } from '../../services/redux/Trivia';

const Trivia = () => {
  const {
    list,
    currentNumber,
  } = useSelector((state) => state.trivia);
  const dispatch = useDispatch();
  const bgColor = useColorModeValue('white', 'gray.700');

  const currentTrivia = list[currentNumber - 1];
  const answers = [
    ...currentTrivia.incorrect_answers,
    currentTrivia.correct_answer,
  ].sort(() => Math.random() - 0.5);

  const htmlDecode = (input) => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  };

  const handleAnswer = (answer) => {
    const newList = [...list];
    newList[currentNumber - 1] = {
      ...currentTrivia,
      answered: answer,
    };

    dispatch(updateTriviaAnswer(newList));
  };

  return (
    <>
      <Card
        display="flex"
      >
        <Text me="2">{currentNumber}.</Text>
        <Text>
          {htmlDecode(currentTrivia.question)}
        </Text>
      </Card>

      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={[4, 8]}
        mt="6"
      >
        {answers.map((answer) => (
          <GridItem
            key={answer}
            as={Button}
            px={[4, 6]}
            py={[6, 9]}
            bgColor={bgColor}
            borderRadius="md"
            boxShadow="lg"
            whiteSpace="normal"
            minHeight={100}
            onClick={() => handleAnswer(answer)}
          >
            {htmlDecode(answer)}
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Trivia;
