import { screen, render } from "@testing-library/react";
import AllRole from "./All";
test("Get All By Role", () => {
    render(<AllRole />);
    const btns = screen.getAllByRole("button");
    const opts = screen.getAllByRole("option");
    for (let btn of btns) {
        expect(btn).toBeInTheDocument();
    }

    for (let opt of opts) {
        expect(opt).toBeInTheDocument();
    }
})