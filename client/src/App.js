import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Start from "./pages/start";
import Version1 from "./pages/version1";
import Version2 from "./pages/version2";
import Version3 from "./pages/version3";
import Database from "./pages/database";
import Result from "./pages/result";
import Test from "./pages/test";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Start} />
          <Route exact path="/version1" component={Version1} />
          <Route exact path="/version2" component={Version2} />
          <Route exact path="/version3" component={Version3} />
          <Route exact path="/database" component={Database} />
          <Route exact path="/test" component={Test} />
          <Route path="/result/:res" component={Result} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
