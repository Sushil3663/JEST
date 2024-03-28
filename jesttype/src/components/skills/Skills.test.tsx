import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe.skip("skills", () => {
  const skill = ["React", "Node", "Python", "JavaScript"];

  test.skip("render correctly", () => {
    render(<Skills skills={skill} />);
    const listElement = screen.getByRole("list");

    expect(listElement).toBeInTheDocument();
  });

  test("render correctly", () => {
    render(<Skills skills={skill} />);

    const listElement = screen.getAllByRole("listitem");

    for (let list of listElement) {
      expect(list).toBeInTheDocument();
    }
  });
  test("render correctly", () => {
    render(<Skills skills={skill} />);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement.length).toBe(skill.length);
  });
});

describe("render", () => {
  const skill = ["React", "Node", "Python", "JavaScript"];

  test("render correctly", () => {
    render(<Skills skills={skill} />);
    const btns = screen.getByRole("button", { name: "Login" });
    expect(btns).toBeInTheDocument();
  });

  //   test("render correctly", () => {
  //     render(<Skills skills={skill} />); // queryBy checks if element not present in virtual dom
  //     const btns = screen.queryByRole("button", { name: "Start Learning" });
  //     expect(btns).not.toBeInTheDocument();
  //   });

  //   test("render correctly", async () => {
  //     render(<Skills skills={skill} />);
  //     const btns = screen.getByRole("button", { name: "Login" });
  //     fireEvent.click(btns);

  //     const startLearning = await screen.findByRole("button", {
  //       name: "Start Learning",
  //     });
  //     expect(startLearning).toBeInTheDocument();
  //   });

  //   test("render correctly", async () => {
  //     render(<Skills skills={skill} />);
  //     const btns = await screen.findByRole(
  //       "button",
  //       {
  //         name: "Start Learning",
  //       },
  //       {
  //         timeout: 3000,
  //       }
  //     ); // find by return a promise  and find by all return a promise with
  //     expect(btns).toBeInTheDocument();
  //   });
});
