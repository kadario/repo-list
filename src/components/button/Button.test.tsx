import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";
/**
 * @jest-environment jsdom
 */
test("renders Button component", () => {
  render(<Button text="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeDefined();
});

test("onClick event is triggered", () => {
  const onClick = jest.fn();
  render(<Button text="Click Me" onClick={onClick} />);
  const buttonElement = screen.getByText(/Click Me/i);
  buttonElement.click();
  expect(onClick).toHaveBeenCalledTimes(1);
});
