import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-div">
          <h1 className="state-error">
            OOPs! Sorry, you can only order 5 items
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
