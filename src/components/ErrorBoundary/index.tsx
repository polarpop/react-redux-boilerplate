import React from 'react';


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

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {

  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (<div>{this.state.error.message}</div>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;