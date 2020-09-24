import { CircularProgress, Container } from '@material-ui/core';
import React from 'react';
import './AppLoading.scss';

export const AppLoading: React.FC = () => (
  <Container maxWidth="xl">
    <div className={'app-loading-container'}>
      <CircularProgress></CircularProgress>
    </div>
  </Container>
);