import { render } from "@testing-library/react";
import SearchBlock from "./SearchBlock";

describe("SearchBlock component", () => {
  it("should render input field", () => {
    const { getByPlaceholderText } = render(<SearchBlock />);

    expect(getByPlaceholderText("Search repositories")).toBeInTheDocument();
  });
});
