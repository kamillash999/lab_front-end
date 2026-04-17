import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import '@testing-library/jest-dom';

describe('Тестирование компонента Counter', () => {
  
  test('Начальное состояние должно быть 0', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('0');
  });

  test('Клик по кнопке "Добавить" увеличивает значение', () => {
    render(<Counter />);
    const button = screen.getByText('Добавить');
    const countElement = screen.getByTestId('count-value');

    fireEvent.click(button); // Симулируем нажатие
    expect(countElement).toHaveTextContent('1');
  });

  test('Клик по кнопке "Убрать" уменьшает значение', () => {
    render(<Counter />);
    const button = screen.getByText('Убрать');
    const countElement = screen.getByTestId('count-value');

    fireEvent.click(button);
    expect(countElement).toHaveTextContent('-1');
  });
});