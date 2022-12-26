import React from "react";
import renderer from "react-test-renderer";
import Table from "../components/Table";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Table />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
