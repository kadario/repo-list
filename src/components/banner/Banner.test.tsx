import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner component", () => {
  it("renders banner section", () => {
    render(<Banner />);

    const bannerElement = screen.getByRole("banner");

    expect(bannerElement).toBeInTheDocument();
  });

  it("renders search block", () => {
    render(<Banner />);

    const searchBlockElement = screen.getByRole("search");

    expect(searchBlockElement).toBeInTheDocument();
  });
});
