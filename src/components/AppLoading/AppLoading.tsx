import React from 'react';
import { CircularProgress, Container, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100vh",
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    display: 'flex'
  }
}))

export const AppLoading: React.FC = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <CircularProgress></CircularProgress>
    </Container>
  );
};