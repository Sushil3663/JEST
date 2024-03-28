import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    let headings = screen.getByRole("heading", {
      name: "Job Application Form",
    });
    expect(headings).toBeInTheDocument();

    let heading1 = screen.getByRole("heading", {
      name: "Section 1",
    });
    expect(heading1).toBeInTheDocument();

    let input = screen.getByRole("textbox", { name: "Name" });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Sushil");

    let input2 = screen.getByDisplayValue("Sushil");
    expect(input2).toBeInTheDocument();

    let inputs = screen.getByRole("textbox", { name: "Bio" });
    expect(inputs).toBeInTheDocument();

    let placeholderName = screen.getByPlaceholderText("Enter Name");
    expect(placeholderName).toBeInTheDocument();

    let text = screen.getByText("ml custom elemen", { exact: false }); // exact ignore case and match Text by string
    expect(text).toBeInTheDocument();

    let text1 = screen.getByText(/html/i); //  ignore case and match Text by regex pattern
    expect(text1).toBeInTheDocument();

    let text2 = screen.getByText(/HTML custom elem/); // match Text by regex pattern
    expect(text2).toBeInTheDocument();

    let text3 = screen.getByText((content) => content.startsWith("HTML")); //  match Text by function
    expect(text3).toBeInTheDocument();

    let title = screen.getByTitle("close");
    expect(title).toBeInTheDocument();

    let dataid = screen.getByTestId("custom-element");
    expect(dataid).toBeInTheDocument();

    let jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    let nameElement = screen.getByLabelText("Name", { selector: "select" });
    expect(nameElement).toBeInTheDocument();

    let nameElement1 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement1).toBeInTheDocument();

    let termElement = screen.getByRole("checkbox");
    expect(termElement).toBeInTheDocument();
    expect(termElement).toBeChecked();

    let submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
