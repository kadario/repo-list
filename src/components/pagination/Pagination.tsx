//**Libs */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//**Store */
import { useSearchStore } from "@store/useSearchStore";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const { setPage } = useSearchStore();

  let totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages > 10) totalPages = 10; // Limit to 10 pages

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setPage(newPage);
    onPageChange(newPage);
  };

  const handlePrevChange = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      handlePageChange(newPage);
    }
  };
  const handleNextChange = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      handlePageChange(newPage);
    }
  };

  if (totalItems === 0 || totalPages <= 1 || currentPage === 0) return null;

  return (
    <nav aria-label="Pagination" className="mt-15 mb-10" role="pagination">
      <ul className="flex justify-center gap-1 text-gray-900">
        {/* Left Arrow */}
        <li>
          <button
            onClick={handlePrevChange}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "grid size-8 place-content-center rounded border border-gray-200 bg-gray-300 text-gray-400 cursor-not-allowed"
                : "grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 cursor-pointer"
            }`}
            aria-label="Previous page"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((page) => (
          <li key={page}>
            <button
              disabled={page === currentPage}
              className={`${
                page === currentPage
                  ? "block size-8 rounded border border-teal-600 bg-teal-600 text-center text-sm/8 font-medium text-white"
                  : "cursor-pointer block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Right Arrow */}
        <li>
          <button
            onClick={handleNextChange}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "grid size-8 place-content-center rounded border border-gray-200 bg-gray-300 text-gray-400 cursor-not-allowed"
                : "grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 cursor-pointer"
            }`}
            aria-label="Next page"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
