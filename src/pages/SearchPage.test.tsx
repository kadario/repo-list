import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
// @ts-expect-error `TextDecoder` is not a constructor
global.TextDecoder = { prototype: TextDecoder };

import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  it("should render search block", async () => {
    const { getByRole } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    await waitFor(() => getByRole("search"));

    expect(getByRole("search")).toBeInTheDocument();
  });

  it("should render search results", async () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    await waitFor(() => getAllByRole("article"));

    expect(getAllByRole("article").length).toBe(1);
  });
});
