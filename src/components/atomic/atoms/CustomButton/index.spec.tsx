import CustomButton from '.';
import { render, screen, fireEvent } from "@testing-library/react";

describe('Test CustomButton Component', () => {
    test('should render CustomButton component', () => {
        render(<CustomButton/>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('should render CustomButton with provided text content', () => {
        render(<CustomButton label='Click me' />);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    });

    test('should handle onClick event', () => {
        const handleClick = vi.fn();
        render(<CustomButton onClick={handleClick} />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('should be disabled when disabled prop is true', () => {
        render(<CustomButton disabled />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    });

    test('should render with different variants', () => {
        render(<CustomButton variant="text" />);
        const primaryButton = screen.getByRole('button');
        expect(primaryButton).toBeInTheDocument()
    });
});
