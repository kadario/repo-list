import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
// @ts-expect-error `TextDecoder` is not a constructor
global.TextDecoder = { prototype: TextDecoder };

/**
 * @jest-environment jsdom
 */

import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Layout from "./Layout";

describe("Layout component", () => {
  it("renders header, main and footer", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Layout>
          <p>Test children</p>
        </Layout>
      </MemoryRouter>
    );

    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders children", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Layout>
          <p>Test children</p>
        </Layout>
      </MemoryRouter>
    );

    expect(getByText("Test children")).toBeInTheDocument();
  });

  it("renders header with correct links", async () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <Layout>
          <p>Test children</p>
        </Layout>
      </MemoryRouter>
    );

    const links = await waitFor(() => getAllByRole("link"));

    expect(links).toHaveLength(5);
    expect(links[1]).toHaveAttribute("href", "/");
    expect(links[2]).toHaveAttribute("href", "/about");
  });
});
