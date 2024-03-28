import { render } from "@testing-library/react";
import renderer from "react-test-renderer"
import User from "./User";

test("class component function(method) test", () => {
    const componentData = renderer.create(<User />).getInstance();
    expect(componentData.getUserList("ram")).toMatch("ram")

})