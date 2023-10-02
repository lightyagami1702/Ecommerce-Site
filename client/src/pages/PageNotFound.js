import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Go back page not found - Ecommerce app"}>
      <div id="main">
        <div className="fof">
          <h1>Error 404</h1>
          <div>
            <Link to="/" className="pnf">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
