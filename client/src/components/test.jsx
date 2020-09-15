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
      time: 0,
      timer: [],
    };
  }

  startTimer = () => {
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 0.01,
        }),
      10
    );
    console.log("start");
  };
  stopTimer = () => {
    clearInterval(this.timer);
    console.log("stop");
  };
  resetTimer = () => {
    this.setState({ time: 0 });
    console.log("reset");
  };

  componentDidMount = () => {
    this.startTimer();
  }

  handleZClick = () => {
    const { index, pictures, timer } = this.state;
    this.stopTimer();
    timer.push(Number(this.state.time).toFixed(2));
    this.resetTimer();
    this.setState({ timer });
    if (pictures.length > index + 1) {
      this.startTimer();
    }
    this.setState({ index: index + 1 });
  };

  handleMClick = () => {
    const { index, pictures, timer } = this.state;
    this.stopTimer();
    timer.push(Number(this.state.time).toFixed(2));
    this.resetTimer();
    this.setState({ timer });
    if (pictures.length > index + 1) {
      this.startTimer();
    }
    this.setState({ index: index + 1 });
  };

  render() {
    const { pictures, index } = this.state;
    console.log(this.state.timer);
    return (
      <div
        style={{
          textAlign: "center",
          position: "relative",
          marginTop: "5%",
        }}
      >
        {
          index < pictures.length ?
            <div>
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
            :
            <h2>Well Done!</h2>
        }

      </div>
    );
  }
}

export default Test;
