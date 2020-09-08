import React from "react";
import { Container, Button } from "@material-ui/core";
import Welcome from "../components/welcome";
import PreTest from "../components/pre-test";
import Intro from "../components/intro";
import Test from "../components/test";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "welcome",
    };
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ page: "pre-test" }), 3000);
  };

  handlePreTestClick = () => {
    this.setState({ page: "intro" });
  };

  handleIntroClick = () => {
    this.setState({ page: "test" });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "welcome":
        return <Welcome />;
      case "pre-test":
        return <PreTest handleClick={this.handlePreTestClick} />;
      case "intro":
        return <Intro handleClick={this.handleIntroClick} />;
      case "test":
        return <Test handleClick={this.handleTestClick} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <Container>
        <div>{this.renderPage()}</div>
      </Container>
    );
  }
}

export default MainPage;
