import React from "react";
import { Link } from "react-router";

import type { RepositoryItem } from "@common-types/RepositoryItemType";

interface SearchResultItemProps {
  item: RepositoryItem;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ item }) => {
  return (
    <article className="rounded-sm block w-full mb-4 bg-white shadow p-3 hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
      <Link to={`/repository/${item.owner.login}/${item.name}`}>
        <div className="flex items-start">
          <h3 className="flex-1 text-lg text-teal-900 font-semibold mr-4 underline hover:no-underline">
            {item.name}
          </h3>
          <div className="text-sm text-gray-400">
            Author: {item.owner.login}
          </div>
        </div>

        {item.description && (
          <p className="mt-5 text-md text-gray-600">{item.description}</p>
        )}

        <div className="mt-3 flex flex-row items-baseline text-sm text-gray-500 gap-4">
          {item.language && (
            <p className="mt-5 text-sm text-gray-500">
              Language: <span className="font-semibold">{item.language}</span>
            </p>
          )}

          <p className="mt-5 text-sm text-gray-500">
            Forks: <span className="font-semibold">{item.forks_count}</span>
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Issues:{" "}
            <span className="font-semibold">{item.open_issues_count}</span>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default SearchResultItem;
