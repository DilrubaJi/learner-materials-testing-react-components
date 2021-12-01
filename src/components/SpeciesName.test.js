import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders label text', () => {
    render(<SpeciesName />);
    const labelText = screen.getByText(
        /Species Name:/i
    );
    expect(labelText).toBeInTheDocument();
});

test('input field values', () => {
    render(<SpeciesName />);
    const inputValue = screen.getByText(
        /humans/i
    );
    expect(inputValue).toBeInTheDocument();
});