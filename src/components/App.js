import React from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import Loadable from "react-loadable";
import GlobalHeader from "./GlobalHeader";
import "../scss/app.scss";

function loading() {
  return <h3>Loading....</h3>;
}

const CloudPalPageComponent = Loadable({
  loader: () => import("../content/CloudPal"),
  loading
});


function App() {
  return (
    <>
      <GlobalHeader />
      <Content>
        <Switch>
          <Route path="/" component={CloudPalPageComponent} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
