import { getByRole, render, screen } from "@testing-library/react";

import user, { userEvent } from "@testing-library/user-event";
import Count from "./Count";

// describe("render correctly", () => {
//   test.skip("should render correctly", () => {
//     render(<Count />);
//     const inputbtn = screen.getByRole("button", { name: "INCREMENT" });
//     expect(inputbtn).toBeInTheDocument();
//   });

//   test.skip("should render correctly heading", () => {
//     render(<Count />);
//     const headings = screen.getByRole("heading");
//     expect(headings).toBeInTheDocument();
//   });

//   test.skip("render a count of 0", () => {
//     render(<Count />);
//     const headings = screen.getByRole("heading");
//     expect(headings).toHaveTextContent("0");
//   });

//   test.skip("render a count of 1 after clicking a button", async () => {
//     user.setup();
//     render(<Count />);
//     const inputbtn = screen.getByRole("button", { name: "INCREMENT" });
//     await user.click(inputbtn);

//     const countElem = screen.getByRole("heading");
//     expect(countElem).toHaveTextContent("1");
//   });

//   test("render a count of 1 after clicking a button", async () => {
//     user.setup();

//     render(<Count />);
//     const inputbtn = screen.getByRole("button", { name: "INCREMENT" });
//     await user.dblClick(inputbtn);
//     const countElem = screen.getByRole("heading");
//     expect(countElem).toHaveTextContent("2");
//   });
// });

describe.skip("render", () => {
  test("keyboard events", async () => {
    user.setup();
    render(<Count />);

    const inputbtn = screen.getByRole("spinbutton");
    await user.type(inputbtn, "10");

    expect(inputbtn).toHaveValue(10);

    const clickset = screen.getByRole("button", { name: "SET" });
    await user.click(clickset);

    const headings = screen.getByRole("heading");

    expect(headings).toHaveTextContent("10");
  });

  test("keyboard events tab focus", async () => {
    user.setup();
    render(<Count />);
    const inputspin = screen.getByRole("spinbutton");
    const inputbtn = screen.getByRole("button", { name: "INCREMENT" });
    const setbutton = screen.getByRole("button", { name: "SET" });

    await user.tab();
    expect(inputbtn).toHaveFocus();
    await user.tab();
    expect(inputspin).toHaveFocus();
    await user.tab();
    expect(setbutton).toHaveFocus();
    await user.tab();
    expect(inputbtn).toHaveFocus();
  });
});

// describe("select option", () => {
//   test("select option", async () => {
//     user.setup();
//     render(<Count />);
//     const select = screen.getByRole("listbox");
//     await user.selectOptions(select, ["1", "c"]);
//     const optionA = screen.getByRole("option", { name: "A" });
//     const optionB = screen.getByRole("option", { name: "B" });
//     const optionC = screen.getByRole("option", { name: "C" });

//     expect(optionA.ariaSelected).toBe(true);
//   });
// });
