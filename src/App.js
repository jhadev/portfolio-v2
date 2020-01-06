import React, { useState } from 'react';
import './App.css';
import Modern from './components/Modern';
import Retro from './components/Retro';
import { Button } from '@chakra-ui/core';

const App = () => {
  const [isRetro, setUI] = useState(false);
  return (
    <>
      <Button
        p={3}
        variantColor="grey"
        height="50px"
        rounded="lg"
        fontSize="xl"
        width="100%"
        mx="auto"
        mb={2}
        onClick={() => setUI(prevUI => !prevUI)}>
        {isRetro ? 'modern' : 'retro'}
      </Button>
      {!isRetro ? <Modern /> : <Retro />}
    </>
  );
};

export default App;
