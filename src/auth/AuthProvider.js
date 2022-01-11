import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-mg6fdv6o.auth0.com"
    clientId="4xXgQ0eXJRefhenfBYuWECatmv46oiJL"
    redirectUri={window.location.origin}
    audience="http://localhost:5001"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);