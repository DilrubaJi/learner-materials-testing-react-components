import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';
// // import React from 'react';


describe('Props are passed', () => {
    it('Given required props, When component is rendered, Then speciesName should be humans', () =>{
        const requiredProps = {
            id: 'speciesName',
            value: 'humans',
            label: 'Species Name: THIS BREAKS LABEL TEST!!',
        

        };

        render(<SpeciesName { ...requiredProps } />);

        expect(screen.getByText(requiredProps.label)).toBeInTheDocument();

        // expect(screen.getByText(requiredProps.value)).toEqual('humans');

        
        });
});






// test('renders label text', () => {
//     render(<SpeciesName />);
//     const labelText = screen.getByText(
//         /Species Name:/i
//     );
//     expect(labelText).toBeInTheDocument();
// });





// test(('value is returned', () => {
//     render(<SpeciesName />);
//     const inputValue = screen.
// }))

// const mockSpeciesName = jest.fn();
// jest.mock("./SpeciesName", () => (props) => {
//     mockSpeciesName(props);
//     return <mock-speciesName />;
// });

// test('value is being passed correctly', () => {
//     render(<SpeciesName speciesName="humans" />);
//     expect(mockSpeciesName).toHaveBeenCalledWith(
//         expect.objectContaining({
//             speciesName: "humans",
//         })
//     );
// });

// test('input field values', () => {
//     render(<SpeciesName />);
//     const inputValue = screen.getByDisplayValue(
//         /humans/i
//     );
//     expect(inputValue).toEqual('human');
// });