import { fireEvent, render, screen } from "@testing-library/react"
import InputBox from "./InputBox"


// test("change Events", () => {
//     render(<InputBox />);
//     let input = screen.getByRole("textbox");
//     fireEvent.change(input, { target: { value: "a" } });
//     expect(input.value).toBe("atest");
// })

test("Change Tests", () => {
    render(<InputBox />);
    let input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("atest");
})