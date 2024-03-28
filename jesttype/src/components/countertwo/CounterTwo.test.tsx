import { screen, render } from "@testing-library/react";
import { CounterTwo } from "./Counter_Two";
import user from "@testing-library/user-event";

describe("render", () => {
  test("should render", () => {
    render(<CounterTwo count={0} />);
    const getHeading = screen.getByRole("heading", { name: "Counter Two" });
    expect(getHeading).toBeInTheDocument();
  });

  test("test Mocking", async () => {
    user.setup();
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );
    const incbtn = screen.getByRole("button", { name: "Increment" });
    const decbtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(incbtn);
    await user.click(decbtn);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});

// Mock Function allow you to test code without acctual implementation of code. Eg Above
