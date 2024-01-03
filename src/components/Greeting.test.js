import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    test('to see if page contains Good to see you text', () => {
        // Arrange
        render(<Greeting/>);
    
        // Act
        // ... nothing
    
        // Assert
        const GoodTextElement = screen.getByText('Good to see you', { exact: false });
        expect(GoodTextElement).toBeInTheDocument();
    });

    test('renders "Changed!" if button was clicked', () => {
        // Arrange
        render(<Greeting/>);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render "good to see you" if button was clicked', () => {
        // Arrange
        render(<Greeting/>);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    })
    
});


