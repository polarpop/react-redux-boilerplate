import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: 15,
    '&:before': {
      backgroundColor: 'transparent'
    }
  }
}));

export const ErrorAccordian: React.FC = () => {
  const error = useSelector((state: any) => state.app.error);
  const classes = useStyles();

  return (
    <Accordion defaultExpanded square className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="error-content"
        id="error">
        <Typography variant="subtitle1">
          {(error?.message || "Something went wrong")}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <pre>
          <code>
            {error?.stack}
          </code>
        </pre>
      </AccordionDetails>
    </Accordion>
  )
}