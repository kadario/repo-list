import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faStar,
  faFaceSmile,
  faHourglassHalf,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import type { SortByOptions } from "@/common-types/SortType";

interface SortByIconsListProps {
  sortOption: SortByOptions;
  handleSortChange: (option: SortByOptions) => void;
}

const SortByIconsList: React.FC<SortByIconsListProps> = ({
  sortOption,
  handleSortChange,
}) => {
  const sortOptionItems = [
    {
      value: "default",
      label: "Default",
      class: "bg-teal-100  text-teal-700",
      activeClass: "border border-teal-500 text-teal-700",
      iconLeft: faFaceSmile,
    },
    {
      value: "stars-asc",
      label: "Stars",
      class: "bg-amber-100  text-amber-700",
      activeClass: "border border-amber-500 text-amber-700",
      iconLeft: faStar,
      iconRight: faAngleUp,
    },
    {
      value: "stars-desc",
      label: "Stars desc",
      class: "bg-amber-100  text-amber-700",
      activeClass: "border border-amber-500 text-amber-700",
      iconLeft: faStar,
      iconRight: faAngleDown,
    },
    {
      value: "forks-asc",
      label: "Forks",
      class: "bg-sky-100  text-sky-700",
      activeClass: "border border-sky-500 text-sky-700",
      iconLeft: faCodeFork,
      iconRight: faAngleUp,
    },
    {
      value: "forks-desc",
      label: "Forks",
      class: "bg-sky-100  text-sky-700",
      activeClass: "border border-sky-500 text-sky-700",
      iconLeft: faCodeFork,
      iconRight: faAngleDown,
    },
    {
      value: "updated",
      label: "Last updated",
      class: "bg-purple-100  text-purple-700",
      activeClass: "border border-purple-500 text-purple-700",
      iconLeft: faHourglassHalf,
    },
  ];

  return (
    <div className="inline-flex flex-wrap">
      {sortOptionItems.map((item) => (
        <label
          key={item.value}
          className={`flex gap-2 items-center rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap cursor-pointer mb-2 ml-2 ${
            sortOption === item.value ? item.class : item.activeClass
          }`}
        >
          {item.iconLeft && <FontAwesomeIcon icon={item.iconLeft} />}
          <input
            type="radio"
            value={item.value}
            checked={sortOption === item.value}
            onChange={(e) => handleSortChange(e.target.value as SortByOptions)}
            className="hidden"
          />
          {item.label}
          {item.iconRight && <FontAwesomeIcon icon={item.iconRight} />}
        </label>
      ))}
    </div>
  );
};

export default SortByIconsList;
