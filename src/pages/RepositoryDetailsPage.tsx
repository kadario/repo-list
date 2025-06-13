import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

//**Components  */
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs";
import ErrorMessage from "@/components/error-message/ErrorMessage";

//**Types */
import type { RepositoryItem } from "@/common-types/RepositoryItemType";
import type { ErrorMessageType } from "@/common-types/ErrorType";

import { API_URL } from "@/constants/api";

const RepositoryDetailsPage = () => {
  const { ownerLogin, repoName } = useParams();
  const [repositoryDetails, setRepositoryDetails] =
    useState<RepositoryItem | null>(null);
  const [error, setError] = useState<ErrorMessageType>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/repos/${ownerLogin}/${repoName}`)
      .then((response) => {
        setRepositoryDetails(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [ownerLogin, repoName]);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          {
            label: `${ownerLogin} / ${repoName}`,
            path: `/repository/${ownerLogin}/${repoName}`,
          },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">
        {ownerLogin} / {repoName}
      </h1>
      <p>
        This is the details page for the repository: <strong>{repoName}</strong>
        . You can add more details about the repository here, such as its
        description, contributors, issues, and other relevant information.
      </p>

      <ErrorMessage error={error} />
      {repositoryDetails ? (
        <div className="mt-4 mb-20">
          <h2 className="text-xl font-semibold mt-20 mb-10">
            Repository Details:
          </h2>

          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-200 text-sm *:even:bg-gray-50">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>

                <dd className="text-gray-700 sm:col-span-2">
                  {repositoryDetails.name}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>

                <dd className="text-gray-700 sm:col-span-2">
                  {repositoryDetails.description}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Stars</dt>

                <dd className="text-gray-700 sm:col-span-2">
                  {repositoryDetails.stargazers_count}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Forks</dt>

                <dd className="text-gray-700 sm:col-span-2">
                  {repositoryDetails.forks_count}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Open Issues</dt>

                <dd className="text-gray-700 sm:col-span-2">
                  {repositoryDetails.open_issues_count}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Link to GitHub</dt>

                <dd className="text-gray-700 sm:col-span-2">
                  <a
                    href={repositoryDetails.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {repositoryDetails.html_url}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div className="mt-4 text-gray-500">Loading repository details...</div>
      )}
    </div>
  );
};

export default RepositoryDetailsPage;
