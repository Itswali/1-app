/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/api/random_greeting')
      .then((response) => {
        setGreeting(response.data.greeting);
      })
      .catch((error) => {
      .then(response => {
        setGreeting(response.data.greeting);
      })
      .catch(error => {
        console.error('Error fetching random greeting:', error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
