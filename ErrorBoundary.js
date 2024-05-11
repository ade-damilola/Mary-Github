// ErrorBoundary.js

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }
    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
