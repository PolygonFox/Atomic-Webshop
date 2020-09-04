import { addDecorator } from '@storybook/react';
import React from 'react';

import GlobalStyles from '../style/GlobalStyle';

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);