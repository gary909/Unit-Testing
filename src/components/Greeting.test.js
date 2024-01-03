import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('to see if page contains hello world text', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
});