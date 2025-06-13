import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
// @ts-expect-error `TextDecoder` is not a constructor
global.TextDecoder = { prototype: TextDecoder };

/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders error message", () => {
    const errorMessage = "Something went wrong";
    render(
      <MemoryRouter>
        <ErrorMessage error={errorMessage} />
      </MemoryRouter>
    );

    const errorMessageElement = screen.getByText(errorMessage);

    expect(errorMessageElement).toBeDefined();
  });

  it("renders null error message", () => {
    render(
      <MemoryRouter>
        <ErrorMessage error={null} />
      </MemoryRouter>
    );

    const errorMessageElement = screen.queryByText("Error");

    expect(errorMessageElement).toBeNull();
  });
});
