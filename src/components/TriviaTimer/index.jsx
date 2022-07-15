import {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Text,
} from '@chakra-ui/react';

import { setTimer } from '../../services/redux/Timer';

const TriviaTimer = () => {
  const time = useSelector((state) => state.timer.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setTimer(time - 1));
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <Text
      ms="auto"
      mb="4"
    >
      {time} Seconds
    </Text>
  );
};

export default TriviaTimer;
