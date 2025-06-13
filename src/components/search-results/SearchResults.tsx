import React from "react";
import { useSearchStore } from "@/store/useSearchStore";
import Loader from "@components/loader/Loader";
import SortBy from "@components/sort-by/SortBy";
import SearchResultItem from "./SearchResultItem";

const SearchResults: React.FC = () => {
  const { searchOnclickResults, loading } = useSearchStore();

  return (
    <section role="article" className="results relative my-20 min-h-100 z-0">
      <Loader loading={loading} />
      <SortBy />

      {searchOnclickResults.length > 0 ? (
        <>
          {searchOnclickResults.map((item) => (
            <SearchResultItem item={item} />
          ))}
        </>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500">
          <h2 className="text-4xl text-gray-300 font-semibold">
            Search results appear here...
          </h2>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
