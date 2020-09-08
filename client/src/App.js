import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/main";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={MainPage} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
