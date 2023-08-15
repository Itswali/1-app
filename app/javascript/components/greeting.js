import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../store/greetingsReducer';

function Greetings() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Greeting:</h1>
        <h3>{greeting}</h3>
        <p>Refresh to get new greeting</p>
      </div>
    </div>
  );
}

export default Greetings;
