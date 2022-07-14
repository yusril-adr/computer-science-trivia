import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';

// Components
import Card from '../../components/Card';

const Trivia = () => (
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
      <Text
        ms="auto"
        mb="4"
      >
        59 Detik
      </Text>
      <Card
        display="flex"
        justifyContent="space-between"
      >
        <Text me="2">1.</Text>
        <Text>
          What is the most preferred image format used for logos in the Wikimedia database?
        </Text>
      </Card>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={[8]}
        mt="6"
      >
        <GridItem as={Card}>
          .svg
        </GridItem>
        <GridItem as={Card}>
          .png
        </GridItem>
        <GridItem as={Card}>
          .jpeg
        </GridItem>
        <GridItem as={Card}>
          .gif
        </GridItem>
      </Grid>

      <Box
        ms="auto"
        mt="4"
      >
        <Button
          colorScheme="orange"
        >
          Skip
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Trivia;
