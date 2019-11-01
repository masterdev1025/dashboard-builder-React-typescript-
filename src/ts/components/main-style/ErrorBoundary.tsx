import React from "react";

export default class ErrorBoundary extends React.Component<
  { compName: string },
  { hasError: boolean }
> {
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  private message = "!!! Error Boundary triggered at " + this.props + " component";

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // tslint:disable-next-line: no-console
    console.error(this.message);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>{this.message}</div>;
    }

    return this.props.children;
  }
}
