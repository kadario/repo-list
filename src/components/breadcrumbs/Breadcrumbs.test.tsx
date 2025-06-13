import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
// @ts-expect-error `TextDecoder` is not a constructor
global.TextDecoder = { prototype: TextDecoder };

/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Breadcrumbs from "./Breadcrumbs";
import { MemoryRouter } from "react-router";

test("renders Breadcrumbs component", () => {
  render(
    <MemoryRouter>
      <Breadcrumbs items={[{ label: "Home", path: "/" }]} />
    </MemoryRouter>
  );

  const breadcrumbElement = screen.getByText(/Home/i);

  expect(breadcrumbElement).toBeInTheDocument();
});

test("renders Breadcrumbs component with multiple items", () => {
  render(
    <MemoryRouter>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Repository", path: "/repository" },
        ]}
      />
    </MemoryRouter>
  );
  const breadcrumbElement = screen.getByText(/Repository/i);
  expect(breadcrumbElement).toBeInTheDocument();
});
