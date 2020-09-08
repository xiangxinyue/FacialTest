import React from "react";
import { Container, Button } from "@material-ui/core";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      pictures: [
        "001.jpg",
        "002.jpg",
        "003.jpg",
        "004.jpg",
        "005.jpg",
        "006.jpg",
        "007.jpg",
        "008.jpg",
        "009.jpg",
      ],
    };
  }

  handleZClick = () => {
    const { index, pictures } = this.state;
    if (pictures.length > index + 1) {
      this.setState({ index: index + 1 });
    }
  };

  handleMClick = () => {
    const { index, pictures } = this.state;
    if (pictures.length > index + 1) {
      this.setState({ index: index + 1 });
    }
  };

  render() {
    const { pictures, index } = this.state;
    return (
      <div
        style={{
          textAlign: "center",
          position: "relative",
          marginTop: "5%",
        }}
      >
        <h4>
          Stage {index + 1} of {pictures.length}
        </h4>
        <img
          src={process.env.PUBLIC_URL + "/pictures/" + pictures[index]}
          style={{ width: "20%" }}
        />
        <div className="row" style={{ marginTop: "30%" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleZClick}
          >
            <h2>Z</h2>
            <br />
            <br />a person without facial disfigurement
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "50%", marginRight: 0, position: "fixed" }}
            onClick={this.handleMClick}
          >
            <h2>M</h2>
            <br />
            <br />a person with facial disfigurement
          </Button>
        </div>
      </div>
    );
  }
}

export default Test;
