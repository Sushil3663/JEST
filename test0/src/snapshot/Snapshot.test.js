import { render, screen } from "@testing-library/react";
import Snapshot from "./Snapshot";

test("Snapshot", () => {
    const snap = render(<Snapshot />);
    expect(snap).toMatchSnapshot();

})