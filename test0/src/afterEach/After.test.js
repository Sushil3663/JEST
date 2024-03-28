import { render, screen } from "@testing-library/react";
import App from "../App";
import Service from "../beforehook/Service";
afterAll(() => {
    Service();
})

// afterEach(() => {
//     Service();
// })

test("Test Text in the App 1", () => {
    console.log("1")
    render(<App />);
    let text = screen.getByText(/React First Test Case/i);

    expect(text).toBeInTheDocument();


})

test("Test Text in the App 2", () => {
    console.log("2")
    render(<App />);
    let text = screen.getByText(/React First Test Case/i);

    expect(text).toBeInTheDocument();

})
test("Test Text in the App 3", () => {
    console.log("3")
    render(<App />);
    let text = screen.getByText(/React First Test Case/i);

    expect(text).toBeInTheDocument();

})

