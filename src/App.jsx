import React from 'react';
import { ScreenCoverProvider } from './lib';
import { Page } from './page';
import PageClass from './page-class';

const screenCoverConfig = {
  coverTime: 500,
  uncoverTime: 4000,
  backgroundColor: "red"
}

const App = () => (
  <ScreenCoverProvider config={screenCoverConfig}>
    <Page />
    <PageClass />
  </ScreenCoverProvider>
)

export default App;
