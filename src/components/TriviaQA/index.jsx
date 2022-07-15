import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import {
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

// Components
import Card from '../Card';

const Trivia = () => {
  const {
    list,
    currentNumber,
  } = useSelector((state) => state.trivia);
  // const dispatch = useDispatch();

  const currentTrivia = list[currentNumber - 1];
  const answers = [
    ...currentTrivia.incorrect_answers,
    currentTrivia.correct_answer,
  ].sort(() => Math.random() - 0.5);

  const convertstring = (string) => string.replace(/&#(?:x([\da-f]+)|(\d+));/ig, (_, hex, dec) => String.fromCharCode(dec || +(`0x${hex}`)));

  return (
    <>
      <Card
        display="flex"
        justifyContent="space-between"
      >
        <Text me="2">{currentNumber}.</Text>
        <Text>
          {convertstring(currentTrivia.question)}
        </Text>
      </Card>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={[8]}
        mt="6"
      >
        {answers.map((answer) => (
          <GridItem as={Card} key={answer}>
            {convertstring(answer)}
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Trivia;
