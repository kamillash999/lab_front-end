import React, { Component, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // Метод обновляет стейт, если произошла ошибка
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Поймана ошибка:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', border: '1px solid red', padding: '10px' }}>
          <h2>Упс! Что-то пошло не так в этом блоке.</h2>
          <button onClick={() => window.location.reload()}>Перезагрузить</button>
        </div>
      );
    }
    return this.props.children;
  }
}