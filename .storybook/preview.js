import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../style/GlobalStyle';
import theme from '../style/theme'

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {storyFn()}
      </ThemeProvider>
    </React.Fragment >
  );
}

addDecorator(withGlobalStyles);