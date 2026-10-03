import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full p-8 rounded-3xl bg-[#141211] border border-[#262320] text-center font-mono text-xs text-[#8E8278]">
            <span className="text-[#722F37]">[ VISUAL ENGINE REINITIALIZING ]</span>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
