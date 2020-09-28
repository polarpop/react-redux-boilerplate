import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { onAppError, onAppLoading, onTitleChange } from '../../actions';

import { ErrorAccordian } from './ErrorMessageAccordian';

type State = {
  hasError: boolean,
  [key: string]: any
};

type Props = {
  [key: string]: any
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.props.dispatch(onAppError(error));
    this.props.dispatch(onTitleChange("Something went wrong..."));
    this.props.dispatch(onAppLoading(false));
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <Container maxWidth="xl" style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            height: "100vh",
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
            display: 'flex'
          }}>
            <Card raised>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Well this is embarrasing
              </Typography>
                {process.env.NODE_ENV === 'development' && this.state.error ?
                  (<ErrorAccordian />) : (
                    <Typography>
                      {(this.state.error?.message || "Something went wrong")}
                    </Typography>)}
              </CardContent>
            </Card>
          </Container>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default connect()(ErrorBoundary);