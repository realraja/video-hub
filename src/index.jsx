import { ColorModeScript,ChakraProvider,theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import GlobalIndex from './context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <StrictMode>
    <GlobalIndex>
    <ColorModeScript />
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher />
        <App /> 
      </ChakraProvider>
      </GlobalIndex>
  </StrictMode>
);

