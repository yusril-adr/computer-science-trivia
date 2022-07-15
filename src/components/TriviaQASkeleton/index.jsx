import {
  Grid,
  GridItem,
  Skeleton,
} from '@chakra-ui/react';

// Components
import Card from '../Card';

const TriviaQASkeleton = () => (
  <>
    <Card
      display="flex"
      justifyContent="space-between"
    >
      <Skeleton height="20px" width="100%" />
    </Card>

    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={[8]}
      mt="6"
    >
      {[1, 2, 3, 4].map((idx) => (
        <GridItem as={Card} key={idx}>
          <Skeleton height="20px" />
        </GridItem>
      ))}
    </Grid>
  </>
);

export default TriviaQASkeleton;
