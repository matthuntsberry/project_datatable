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

const DetailsPageComponent = Loadable({
  loader: () => import("../content/DetailsPage"),
  loading
});

function App() {
  return (
    <div className="app__container">
      <GlobalHeader />
      <Sidebar />
      <Content className="content">
        <Switch>
          <Route exact path="/" component={DetailsPageComponent} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
