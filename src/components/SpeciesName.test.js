import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders label text', () => {
    render(<SpeciesName />);
    const labelText = screen.getByText(
        /Random text to fail test/i
    );
    expect(labelText).toBeInTheDocument();
});