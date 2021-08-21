import React from 'react';
import { ScreenCoverProvider } from './lib';
import { Page } from './page';
import PageClass from './page-class';

const App = () => (
  <ScreenCoverProvider>
    <Page />
    <PageClass />
  </ScreenCoverProvider>
)

export default App;
