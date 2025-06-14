//**Libs */
import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

//**Types */
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface BreadcrumbsProps {
  items: { label: string | IconProp; path: string }[];
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
              {typeof item.label === "string" ? (
                <span>{item.label}</span>
              ) : (
                <FontAwesomeIcon icon={item.label} />
              )}
            </Link>
            {index < items.length - 1 && (
              <FontAwesomeIcon
                icon={faAngleRight}
                className="mx-2 text-gray-400"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
