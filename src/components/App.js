import React from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import Loadable from "react-loadable";
import GlobalHeader from "./GlobalHeader";
import Sidebar from "./Sidebar";
import "../scss/main.scss";

function loading() {
  return <h3>Loading....</h3>;
}

const CloudPalPageComponent = Loadable({
  loader: () => import("../content/CloudPal"),
  loading
});

function App() {
  return (
    <div className="app__container">
      <GlobalHeader />
      {/* <Sidebar /> */}
      <Content>
        <Switch>
          <Route path="/" component={CloudPalPageComponent} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
