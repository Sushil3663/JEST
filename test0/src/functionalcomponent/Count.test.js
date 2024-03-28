
import TestRenderer from 'react-test-renderer';
import Count from './Count';
import { fireEvent, render, screen } from '@testing-library/react';




// test(" Button test using react-test-renderer", () => {
//     const testRenderer = TestRenderer.create(<Count />);

//     const testInstance = testRenderer.root;




//     // Find the button element
//     const buttonElement = testInstance.findByType('button');

//     // Trigger a click event on the button
//     buttonElement.props.onClick();



//     // Assert on the new state of the componen

//     // expect(testInstance.findByType('button').children[1]).toBe('1');

// })


test("button element", () => {
    render(<Count />);
    let btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText(1)).toBeInTheDocument()

})