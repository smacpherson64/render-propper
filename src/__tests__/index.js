import * as React from "react";
import * as R from "ramda";
import { render } from "react-testing-library";
import renderProp from "../lib/render-prop";

describe("renderProp", () => {
  test("ability to be imported", () => {
    expect(renderProp).toBeDefined();
  });

  test("passing function to render prop returns a function", () => {
    const result = renderProp(jest.fn);

    expect(typeof result === "function").toBe(true);
  });

  test("passing two functions to render prop returns a function", () => {
    const result = renderProp(jest.fn, jest.fn);

    expect(typeof result === "function").toBe(true);
  });

  test("can render based off of an object", () => {
    const object = {
      test: input => input,
      output: "output"
    };

    const exampleRenderProp = renderProp(R.prop("test"), R.prop("output"));
    const result = exampleRenderProp(object);

    expect(result).toBe(object.output);
  });

  test("can render a react component", () => {
    const ChildrenRenderProp = renderProp(R.prop("children"), R.prop("test"));

    const { getByText } = render(
      <ChildrenRenderProp test="output">
        {result => <div>{result}</div>}
      </ChildrenRenderProp>
    );

    expect(getByText("output")).toHaveTextContent("output");
  });
});
