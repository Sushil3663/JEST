import { render, screen } from "../../test-util";
import Mui_Mode from "./Mui_Mode";

// describe("render correctly", () => {
//   test("Provider renders correctly", () => {
//     render(<Mui_Mode />, {
//       wrapper: AppProvider,
//     });
//     const darkMode = screen.getByRole("heading");
//     expect(darkMode).toHaveTextContent("dark mode");
//   });

//   test("Provider renders correctlys", () => {
//     render(<Mui_Mode />, {
//       wrapper: AppProvider,
//     });
//     const darkMode = screen.getByText("dark mode");
//     expect(darkMode).toBeInTheDocument();
//   });
// });
describe("render correctly", () => {
  test("Provider renders correctly", () => {
    render(<Mui_Mode />);
    const darkMode = screen.getByRole("heading");
    expect(darkMode).toHaveTextContent("dark mode");
  });

  test("Provider renders correctlys", () => {
    render(<Mui_Mode />);
    const darkMode = screen.getByText("dark mode");
    expect(darkMode).toBeInTheDocument();
  });
});
