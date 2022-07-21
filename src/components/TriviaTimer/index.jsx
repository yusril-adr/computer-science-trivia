import {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  Text,
} from '@chakra-ui/react';

import { setTimer } from '../../services/redux/Timer';

const TriviaTimer = () => {
  const time = useSelector((state) => state.timer.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (time) {
      const timer = setInterval(() => {
        dispatch(setTimer(time - 1));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  if (time <= 0) {
    return <Navigate to="/result" />;
  }

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
