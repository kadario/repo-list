import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from "./Input";

describe("Input component", () => {
  it("renders the input field with correct placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input
        id="test-input"
        type="text"
        placeholder="Enter text"
        onChange={() => {}}
      />
    );

    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("calls onChange handler when text is input", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        id="test-input"
        type="text"
        placeholder="Enter text"
        onChange={handleChange}
      />
    );

    const inputElement = getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders the input field with the correct value", () => {
    const { getByDisplayValue } = render(
      <Input
        id="test-input"
        type="text"
        value="Test value"
        onChange={() => {}}
      />
    );

    expect(getByDisplayValue("Test value")).toBeInTheDocument();
  });
});
