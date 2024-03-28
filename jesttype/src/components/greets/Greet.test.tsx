import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet Test 1", () => {
  render(<Greet />);
  let test = screen.getByText(/hello/i);
  expect(test).toBeInTheDocument();
});

test("Greet Test 2", () => {
  render(<Greet name={"Sushil"} />);
  let test = screen.getByText("Hello : Sushil");
  expect(test).toBeInTheDocument();
});

describe("Greet", () => {
  test("Test Correct", () => {
    render(<Greet />);
    let test = screen.getByText(/hello/i);
    expect(test).toBeInTheDocument();
  });
  describe("Nested Text", () => {
    test("Greet Test 2", () => {
      render(<Greet name={"Sushil"} />);
      let test = screen.getByText("Hello : Sushil");
      expect(test).toBeInTheDocument();
    });
  });
});
