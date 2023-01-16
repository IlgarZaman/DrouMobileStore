import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const ErrorPage = () => {
  return (
    <div className="errorPageMainDiv">
      <div className="errorPageCenterDiv">
        <div className="errorLogo">
          <Link to={"/"}>
            <img
              src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo_300x300.png?v=1671082437"
              alt=""
            />
          </Link>
        </div>
        <h2>Ooops! Error 404</h2>
        <p>Sorry, But the page you are looking for does't exist!</p>
      </div>
    </div>
  );
};

export default ErrorPage;
