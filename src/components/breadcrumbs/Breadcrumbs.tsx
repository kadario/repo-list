import React from "react";
import { Link } from "react-router";

interface BreadcrumbsProps {
  items: { label: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex items-center gap-1 text-sm text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link
              to={item.path}
              className="block transition-colors hover:text-gray-900"
            >
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 mx-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
