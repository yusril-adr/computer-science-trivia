import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';

// Components
import Card from '../../components/Card';

const Result = () => (
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
          4
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
          3
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
          7
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
          70
        </Text>

        <Text
          fontSize="xl"
        >
          Score
        </Text>
      </GridItem>

      <GridItem
        as={Button}
        px={[2, 6]}
        py={[6, 9]}
        colSpan={3}
        colorScheme="blue"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Back
      </GridItem>
    </Grid>
  </Box>
);

export default Result;
