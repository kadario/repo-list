import { useSearchStore } from "@store/useSearchStore";

import type { SortByOptions } from "@common-types/SortType";

const SortBy: React.FC = () => {
  const sortOptionItems = [
    {
      value: "default",
      label: "Default",
      class: "bg-teal-100  text-teal-700",
      activeClass: "border border-teal-500 text-teal-700",
    },
    {
      value: "stars-asc",
      label: "Stars asc",
      class: "bg-amber-100  text-amber-700",
      activeClass: "border border-amber-500 text-amber-700",
    },
    {
      value: "stars-desc",
      label: "Stars desc",
      class: "bg-amber-100  text-amber-700",
      activeClass: "border border-amber-500 text-amber-700",
    },
    {
      value: "forks-asc",
      label: "Forks asc",
      class: "bg-sky-100  text-sky-700",
      activeClass: "border border-sky-500 text-sky-700",
    },
    {
      value: "forks-desc",
      label: "Forks desc",
      class: "bg-sky-100  text-sky-700",
      activeClass: "border border-sky-500 text-sky-700",
    },
    {
      value: "updated",
      label: "Last updated",
      class: "bg-purple-100  text-purple-700",
      activeClass: "border border-purple-500 text-purple-700",
    },
  ];

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
    <div className="flex flex-row  items-baseline my-15">
      <h6 className="text-sm font-medium text-gray-700 mr-4">Sort by:</h6>

      <div className="flex-inline justify-center">
        {sortOptionItems.map((item) => (
          <label
            key={item.value}
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap cursor-pointer mb-2 ml-2 ${
              sortOption === item.value ? item.class : item.activeClass
            }`}
          >
            <input
              type="radio"
              value={item.value}
              checked={sortOption === item.value}
              onChange={(e) =>
                handleSortChange(e.target.value as SortByOptions)
              }
              className="hidden"
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
