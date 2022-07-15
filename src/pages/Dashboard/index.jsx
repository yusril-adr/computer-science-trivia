import {
  Box,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';
import {
  useDispatch,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import Card from '../../components/Card';

// Configuration
import CONFIG from '../../global/CONFIG';

// Services
import { startTrivia, resetTrivia } from '../../services/redux/Trivia';
import { resetTimer } from '../../services/redux/Timer';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(resetTrivia());
  dispatch(resetTimer());

  const handleStartTrivia = () => {
    navigate('/trivia');
    dispatch(startTrivia());
  };

  return (
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
              {CONFIG.TRIVIA_TIME}
            </Text>

            <Text fontSize="2xl">
              Detik
            </Text>
          </Box>
        </Box>

        <Button
          colorScheme="teal"
          mt="6"
          onClick={handleStartTrivia}
        >
          Start Trivia!
        </Button>
      </Card>
    </Box>
  );
};

export default Dashboard;
