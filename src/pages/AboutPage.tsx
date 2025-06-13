//**Components */
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs";

const AboutPage = () => {
  return (
    <div className="my-8 w-full">
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
      />
      <h1 className="text-5xl font-bold mb-4 text-gray-900">About Page</h1>
      <p className=" text-gray-500 mb-2">
        This is a simple website that uses the GitHub API to search for
        repositories.
      </p>
      <h3 className="text-3xl font-bold mb-4">Goal:</h3>
      <p className=" text-gray-500 mb-2">
        Build a small React application that allows users to search for GitHub
        repositories and view some basic details about them.
      </p>
      <p className=" text-gray-500 mb-2">
        <strong>Estimated Time:</strong> 4-6 hours. Please don't feel pressured
        to spend significantly more time than this. Focus on quality over
        quantity of features.
      </p>
      <h3 className="text-3xl font-bold mb-4">Core Task:</h3>
      <p className=" text-gray-500 mb-2">
        Create a single-page application (SPA) with the following features:
      </p>
      <h4 className="text-1xl font-bold mb-4">Repository Search: </h4>
      <p className=" text-gray-500 mb-2">
        <ul>
          <li>
            An input field where users can type a search query (e.g., "react",
            "tensorflow").
          </li>
          <li>
            A button or action (e.g., pressing Enter) to trigger the search.
          </li>
          <li>
            Use the GitHub API to search for repositories based on the user's
            query. API Endpoint:
            {
              "https://api.github.com/search/repositories?q={query}&per_page=10&page='page'"
            }
            Replace {"query"} with the user's input and {"page"} with the
            current page number.
          </li>
        </ul>
      </p>
      <h4 className="text-1xl font-bold mb-4">Results Display:</h4>
      <p className=" text-gray-500 mb-2">
        <ul>
          <li>Display the search results in a list format.</li>
          <li>
            For each repository in the list, show at least: Repository Name
            Owner/Organization Name Star Count Primary Language Description.
          </li>
          <li>
            Handle loading states appropriately (show an indicator while
            fetching data).
          </li>
          <li>
            Handle error states (e.g., API errors, no results found) gracefully,
            providing feedback to the user.
          </li>
        </ul>
      </p>
      <h4 className="text-1xl font-bold mb-4">Pagination:</h4>
      <p className=" text-gray-500 mb-2">
        <ul>
          <li>Implement pagination for the search results.</li>
          <li>
            Allow users to navigate between pages of results (e.g., "Previous",
            "Next" buttons, or page numbers).
          </li>
          <li>Update the results list based on the selected page.</li>
        </ul>
      </p>
      <h4 className="text-1xl font-bold mb-4">Repository Details (Routing):</h4>
      <p className=" text-gray-500 mb-2">
        <ul>
          <li>
            When a user clicks on a repository name in the list, navigate to a
            separate "details" view/page for that specific repository without a
            full page reload.
          </li>
          <li>
            This detail view should display additional information fetched for
            that specific repository. You might need a different API call for
            this (e.g., https://api.github.com/repos/{"owner"}/{"repo"}).
            Display details like: Repository Name Owner/Organization Name Star
            Count Primary Language Description Number of Forks Number of Open
            Issues Link to the repository on GitHub.
          </li>
          <li>Provide a way to navigate back to the search results page.</li>
        </ul>
      </p>
      <h4 className="text-1xl font-bold mb-4">Technical Requirements:</h4>
      <p className=" text-gray-500 mb-2">
        <ul>
          <li>
            Framework: React (latest stable version preferred). Use Create React
            App, Vite, or another standard setup.
          </li>
          <li>
            Language: JavaScript or TypeScript (TypeScript is preferred for
            senior roles, but well-structured JavaScript is acceptable).
          </li>
          <li>
            Routing: Use a standard React routing library (e.g.,
            react-router-dom).
          </li>
          <li>
            State Management: Choose a state management approach you feel is
            appropriate for this application's scale (e.g., Context API +
            useReducer, Redux Toolkit, Zustand, Jotai). Be prepared to briefly
            justify your choice in the README.
          </li>
          <li>
            Styling: Use any modern styling approach (e.g., CSS Modules, Styled
            Components, Emotion, Tailwind CSS). Ensure the UI is clean and
            usable. Basic responsiveness is expected.
          </li>
          <li>
            API Interaction: Use fetch or a library like axios for API calls.
          </li>
          <li>
            Testing: Write meaningful unit or integration tests for key
            components or logic (e.g., testing a component's rendering based on
            props, testing API fetching logic, testing state updates). Use a
            standard testing library like Jest and React Testing Library. Aim
            for reasonable coverage of critical parts rather than 100% coverage.
          </li>
          <li>
            Version Control: Use Git. Provide a link to a public repository
            (e.g., GitHub, GitLab).
          </li>
        </ul>
      </p>
    </div>
  );
};

export default AboutPage;
