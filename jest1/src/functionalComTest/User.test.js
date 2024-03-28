import { fireEvent, render, screen } from "@testing-library/react"
import User from "./User";
import handlesClick from "./Helper";

test("Function test 1", () => {
    render(<User />);
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(screen.getByText("hello")).toBeInTheDocument
})



test("Function test 2", () => {

    expect(handlesClick()).toMatch('hi')
})