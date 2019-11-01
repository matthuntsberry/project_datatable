import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// IE11 Polyfills
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.array.fill";
import "core-js/modules/es6.string.includes";
import "core-js/modules/es6.string.trim";
import "core-js/modules/es7.object.values";

import "./scss/vendors/carbon.scss";
import App from "./components/App";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
