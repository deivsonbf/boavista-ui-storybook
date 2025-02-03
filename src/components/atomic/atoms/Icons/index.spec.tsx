import { render, screen } from "@testing-library/react";
import Icons from ".";

describe('Test Icons Component', () => {
    test('should render the component', () => {
        render(<Icons />)
        const component = screen.getByText('icons')
        expect(component).toBeInTheDocument()
    });
});