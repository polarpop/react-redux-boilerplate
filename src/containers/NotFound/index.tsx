import React from 'react';

import { Container, Typography } from '@material-ui/core';


export const NotFound: React.FC = (props: any) => {

  return (
    <Container maxWidth="xl">
      <Typography>Not found</Typography>
    </Container>
  );
}

export default NotFound;