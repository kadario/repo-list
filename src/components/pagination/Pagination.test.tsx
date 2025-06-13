import { render, fireEvent, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("should render pagination component", () => {
    const { getByText } = render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={() => {}}
      />
    );

    expect(getByText("1")).toBeDefined();
  });

  it("should call onPageChange when page is changed", async () => {
    const onPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={onPageChange}
      />
    );

    fireEvent.click(getByText("2"));

    await waitFor(() => expect(onPageChange).toHaveBeenCalledTimes(1));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
