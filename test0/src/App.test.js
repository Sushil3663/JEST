import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test Text in the App", () => {
  render(<App />);
  let text = screen.getByText(/React First Test Case/i);
  let text1 = screen.getByText(/sushil karki/i);
  let title = screen.getByTitle(/logo/i);
  expect(text).toBeInTheDocument();
  expect(text1).toBeInTheDocument();
  expect(title).toBeInTheDocument();

})


test("Check Input Box", () => {
  render(<App />);
  const inputField = screen.getByRole("textbox");
  const place = screen.getByPlaceholderText("Enter User Name")
  expect(inputField).toHaveAttribute("name", "username")
  expect(inputField).toHaveAttribute("id", "nameid")
  expect(inputField).toHaveAttribute("name", "username")
  expect(inputField).toHaveAttribute("value", "sushil")
  expect(place).toBeInTheDocument()
  expect(inputField).toBeInTheDocument()
})