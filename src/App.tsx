import React from 'react';
import { ScreenCoverProvider } from './lib';
import { Page } from './page';
import PageClass from './page-class';

const screenCoverConfig = {
  coverTime: 1500,
  uncoverTime: 4000,
  backgroundColor: "red"
}

const App = () => (
  <ScreenCoverProvider config={screenCoverConfig}>
    <Page />
    {process.env.NODE_ENV === "development" && <PageClass />}
  </ScreenCoverProvider>
)

export default App;
