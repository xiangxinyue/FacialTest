import React from "react";
import VolumeAdjustment from "../components/volume-adjust/main";
import SpeechInNoise from "../components/speech-in-noise/main";
import Environment from "../components/helpers/environment";
import Submit from "../components/helpers/submit";
import { Container } from "@material-ui/core";
import axios from "axios";

class Version1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "environment",
      volume: 10,
      SNR: 0,
      timer: [],
      v: 1,
      result: ["pass", "fail"][Math.floor(Math.random() * 2)],
    };
  }

  saveData = async () => {
    console.log(this.state);
    await axios.post("/api/data", {
      version: 1,
      SNR: this.state.SNR,
      result: this.state.result,
      timer: this.state.timer,
    });
  };

  renderProcess = () => {
    const { process, result } = this.state;
    switch (process) {
      case "environment":
        return (
          <Environment
            handleNext={() => this.setState({ process: "adjustment" })}
          />
        );
      case "adjustment":
        return (
          <VolumeAdjustment
            handleVolume={(volume) => this.setState({ volume })}
            handleNext={() => this.setState({ process: "testing" })}
          />
        );
      case "testing":
        return (
          <SpeechInNoise
            volume={this.state.volume}
            handleFinish={(SNR, timer) =>
              this.setState({ process: "submit", SNR, timer })
            }
          />
        );
      case "submit":
        return (
          <Submit
            handleSubmit={() => {
              this.setState({ process: "result" });
              this.saveData();
            }}
          />
        );

      case "result":
        return this.props.history.push("/result/" + result);
      default:
        return <process />;
    }
  };

  render() {
    return (
      <Container>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <h5 className="text-left font-weight-bold">
            DON’T FADE INTO THE BACKGROUND
          </h5>
          <h5 className="font-weight-bold text-left text-muted">
            GET IN TOUCH WITH AN AUDIOLOGIST
          </h5>
        </div>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "20%",
          }}
        >
          {this.renderProcess()}
        </div>
        <div>
          <img
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "50%",
            }}
            src={process.env.PUBLIC_URL + "/pictures/poster1.png"}
            alt=""
          />
        </div>
      </Container>
    );
  }
}

export default Version1;
