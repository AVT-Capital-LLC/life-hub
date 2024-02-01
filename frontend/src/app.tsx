import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
  };
  
  export default App;