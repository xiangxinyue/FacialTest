import React from "react";
import VolumeAdjustment from "../components/volume-adjust/main";
import SpeechInNoise from "../components/speech-in-noise/main";
import Environment from "../components/helpers/environment";
import Submit from "../components/helpers/submit";
import { Container } from "@material-ui/core";
import axios from "axios";

class Version3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "environment",
      volume: 10,
      SNR: null,
      timer: [],
      v: 1,
      result: ["pass", "fail"][Math.floor(Math.random() * 2)],
    };
  }

  saveData = async () => {
    console.log(this.state);
    await axios.post("/api/data", {
      version: 3,
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
            textAlign: "center",
            position: "relative",
            marginTop: "20%",
          }}
        >
          {this.renderProcess()}
        </div>
      </Container>
    );
  }
}

export default Version3;
