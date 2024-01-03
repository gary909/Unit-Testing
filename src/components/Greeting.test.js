import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
    test('to see if page contains hello world text', () => {
        // Arrange
        render(<Greeting/>);
    
        // Act
        // ... nothing
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });
    
    // New test case to check if the page contains 'It's good to see you!' text
    test('to see if page contains good to see you! text', () => {
        // Arrange
        render(<Greeting/>);
    
        // Act
        // ... nothing
    
        // Assert
        const greetingTextElement = screen.getByText('Good to see you!');
        expect(greetingTextElement).toBeInTheDocument();
    });
});


