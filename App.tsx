import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './src/global/styles/theme';
import { Welcome } from './src/global/pages/Welcome';
import { Home } from './src/global/pages/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
       {/* <Welcome></Welcome> */}
       <Home/>
    </ThemeProvider>
  );
};
