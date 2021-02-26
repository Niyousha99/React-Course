import React, { Component } from 'react';

// only use for components that you know may fail and you
// can't control it

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ""
    }

    // executed whenever the component that is wrapped with
    // ErrorBoundary throws an error (params supplied by react automatically)
    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children; // default case to display anything wrapped in this component
        }
    }
}

export default ErrorBoundary;