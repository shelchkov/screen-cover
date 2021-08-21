import React from 'react';
import { ScreenCoverProvider } from './lib';
import { Page } from './page';

const App = () => (
  <ScreenCoverProvider>
    <Page />
  </ScreenCoverProvider>
)

export default App;
