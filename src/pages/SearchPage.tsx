//**Components */
import Banner from "@components/banner/Banner";
import Pagination from "@components/pagination/Pagination";
import ErrorMessage from "@components/error-message/ErrorMessage";
import SearchResults from "@components/search-results/SearchResults";

//**Store */
import { useSearchStore } from "@store/useSearchStore";

const SearchPage = () => {
  const {
    query,
    error,
    totalCount,
    page,
    executeSearch,
    setPage,
    setSearchTypingResults,
  } = useSearchStore();

  return (
    <>
      <Banner />
      <ErrorMessage error={error} />
      <SearchResults />
      <Pagination
        totalItems={totalCount || 0}
        itemsPerPage={10}
        currentPage={page}
        onPageChange={(page: number) => {
          setPage(page);
          setSearchTypingResults([]);
          executeSearch(query, 10, page);
        }}
      />
    </>
  );
};

export default SearchPage;
