import { screen, render, configure } from "@testing-library/react";
import Label from "./Label";

configure({ testIdAttribute: "id" })

test("Get All By Role", () => {
    render(<Label />);
    const checkbox = screen.getByLabelText("Check");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

})

test("Get All By Role", () => {
    render(<Label />);
    const input = screen.getByLabelText("Input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("sushil")

})


test("Get All By Role", () => {
    render(<Label />);
    const test = screen.getByTestId("name-id");

    expect(test).toBeInTheDocument();

})