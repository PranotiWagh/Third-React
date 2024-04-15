import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false // Set initial state to false, since there's no error initially
        };
    }

    static getDerivedStateFromError(error) {
        return {
            isError: true
        };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.isError) {
            return <h1>Something went wrong</h1>; // Fallback UI for error
        } else {
            return this.props.children; // Render children if no error
        }
    }
}

export default ErrorBoundry;
