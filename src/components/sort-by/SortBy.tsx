import { useSearchStore } from "@store/useSearchStore";
import type { SortByOptions } from "@common-types/SortType";
import SortByIconsList from "./SortByIconsList";

const SortBy: React.FC = () => {
  const { searchOnclickResults, sortOption, setSortOption, executeSort } =
    useSearchStore();

  const handleSortChange = (option: SortByOptions) => {
    setSortOption(option);
    executeSort();
  };

  if (searchOnclickResults.length === 0) {
    return null;
  }

  return (
    <div className="inline-flex items-baseline my-15">
      <h6 className="text-sm whitespace-nowrap font-medium text-gray-700 mr-4">
        Sort by:
      </h6>

      <SortByIconsList
        handleSortChange={handleSortChange}
        sortOption={sortOption}
      />
    </div>
  );
};

export default SortBy;
