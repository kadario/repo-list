//**Libs */
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//**Types */
import type { RepositoryItem } from "@common-types/RepositoryItemType";

interface SearchResultItemProps {
  item: RepositoryItem;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ item }) => {
  return (
    <article className="rounded-sm block w-full mb-4 bg-white shadow p-3 hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
      <Link to={`/repository/${item.owner.login}/${item.name}`}>
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg text-teal-900 font-semibold mr-4 underline hover:no-underline">
              {item.name}
            </h3>

            <span className="text-xs text-gray-400">
              <FontAwesomeIcon icon={faUser} />
              &nbsp;&nbsp;{item.owner.login}
            </span>
          </div>

          <div className="text-sm text-gray-400">
            <div className="flex flex-row text-sm text-gray-500 gap-4">
              {item.language && (
                <p>
                  Language:{" "}
                  <span className="font-semibold">{item.language}</span>
                </p>
              )}

              <p>
                Forks: <span className="font-semibold">{item.forks_count}</span>
              </p>

              <p>
                Issues:{" "}
                <span className="font-semibold">{item.open_issues_count}</span>
              </p>
            </div>
          </div>
        </div>

        {item.description && (
          <p className="mt-5 text-md text-gray-600">{item.description}</p>
        )}
      </Link>
    </article>
  );
};

export default SearchResultItem;
