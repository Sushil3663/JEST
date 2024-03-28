import { screen, render } from "@testing-library/react";
import AllRole from "./AllRole";
import '@testing-library/jest-dom'; // Import this line
test("Get All By Role", () => {
    render(<AllRole />);
    const btns = screen.getAllByRole("button");
    for (let btn of btns) {
        expect(btn).toBeInTheDocument();
    }
})