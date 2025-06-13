//***Libs */
import { useState, useCallback } from "react";
import throttle from "lodash/throttle";

//**Store */
import { useSearchStore } from "@store/useSearchStore";

//**Components */
import Button from "@components/button/Button";
import Input from "@components/input/Input";

const SearchBlock: React.FC = () => {
  const [textValue, setTextValue] = useState<string>("");

  const {
    setQuery,
    setPage,
    executeSearch,
    searchTypingResults,
    setSearchTypingResults,
  } = useSearchStore();

  const throttledSetQuery = useCallback(
    throttle((value) => {
      setQuery(value);
      executeSearch(value);
    }, 500),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextValue(value);
    throttledSetQuery(value);
  };

  const handleSearch = () => {
    if (textValue === "") return;

    setPage(1);
    setQuery(textValue);
    setSearchTypingResults([]);
    executeSearch(textValue, 10);
  };

  const handleChoose = (name: string) => {
    setPage(1);
    setTextValue(name);
    setQuery(name);
    setSearchTypingResults([]);
    executeSearch(name, 10);
  };

  return (
    <>
      <div role="search" className="search-block-container mb-20 relative z-10">
        <div className="search-block flex gap-2 border-1 relative border-gray-300 rounded p-2 shadow-sm">
          <Input
            id="search-input"
            type="text"
            placeholder="Search repositories"
            value={textValue}
            onChange={handleChange}
          />
          <Button onClick={handleSearch} text="Search" />
        </div>

        {searchTypingResults.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 rounded shadow-md w-full p-2 max-h-60 overflow-y-auto">
            {searchTypingResults.map((item) => (
              <li
                key={item.id}
                className="result-item block truncate py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleChoose(item.name)}
              >
                {item.name}
                {item.description && (
                  <span className="pl-4 text-gray-400 truncate">
                    {item.description}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBlock;
