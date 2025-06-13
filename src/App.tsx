import { Routes, Route } from "react-router";

import "./App.css";
import Layout from "@components/layout/Layout";
import SearchPage from "@pages/SearchPage";
import AboutPage from "@pages/AboutPage";
import RepositoryDetailsPage from "@pages/RepositoryDetailsPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route
            path="repository/:ownerLogin/:repoName"
            element={<RepositoryDetailsPage />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
