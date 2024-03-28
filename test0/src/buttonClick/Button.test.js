import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"


test("Button Clicked", () => {
    render(<Button />);
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(screen.getByText("Button Clicked")).toBeInTheDocument()
})