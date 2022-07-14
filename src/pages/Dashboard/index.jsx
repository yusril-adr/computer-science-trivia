import {
  Box,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';

// Components
import Card from '../../components/Card';

const Dashboard = () => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
  >
    <Card
      minW={[290, 300, 450]}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        w="100%"
      >
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl">
            10
          </Text>

          <Text fontSize="2xl">
            Soal
          </Text>
        </Box>

        <Box height="50px">
          <Divider orientation="vertical" />
        </Box>

        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl">
            60
          </Text>

          <Text fontSize="2xl">
            Detik
          </Text>
        </Box>
      </Box>

      <Button colorScheme="teal" mt="6">
        Start Trivia!
      </Button>
    </Card>
  </Box>
);

export default Dashboard;
