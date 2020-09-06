import React from "react";
import { Button, Container } from "@material-ui/core";
import Slider from "../assets/volume-slider";

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: new Audio(process.env.PUBLIC_URL + "/audios/testnoise.wav"),
      audioVolume: 0.1,
      db: 0,
      start: false,
    };
  }

  handlePlay = async () => {
    const { audioVolume, audio } = this.state;
    console.log("audio Volume: " + audioVolume);
    console.log("DB is", this.state.db);
    audio.volume = audioVolume;
    await audio.play();
    this.setState({ start: true });
  };

  handleStop = async () => {
    await this.state.audio.pause();
    this.setState({ start: false });
  };

  goEasier = (step) => {
    const { audioVolume, db } = this.state;
    if (step === 4) {
      this.setState({ db: db + 4 });
      if (audioVolume * 10 ** (4 / 20) > 1) {
        return this.setState({ audioVolume: 1 });
      } else {
        return this.setState({ audioVolume: audioVolume * 10 ** (4 / 20) });
      }
    } else {
      this.setState({ db: db + 2 });
      if (audioVolume * 10 ** (2 / 20) > 1) {
        return this.setState({ audioVolume: 1 });
      } else {
        return this.setState({ audioVolume: audioVolume * 10 ** (2 / 20) });
      }
    }
  };

  goHarder = (step) => {
    const { audioVolume, db } = this.state;
    if (step === 4) {
      this.setState({ db: db - 4 });
      return this.setState({ audioVolume: audioVolume * 10 ** (-4 / 20) });
    } else {
      this.setState({ db: db - 2 });
      return this.setState({ audioVolume: audioVolume * 10 ** (-2 / 20) });
    }
  };

  render() {
    const { db, start } = this.state;
    return (
      <Container style={{ textAlign: "center" }}>
        <div style={{ marginTop: "10%", marginBottom: "10%" }}>
          <hr />
          <Slider
            handleVolume={(volume) =>
              this.setState({
                audioVolume: volume / 100,
              })
            }
          />
          {start ? (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={this.handleStop}
            >
              Stop {db} dB
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={this.handlePlay}
            >
              Play {db} dB
            </Button>
          )}

          <hr />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.goEasier(4)}
            style={{ margin: 10 }}
          >
            Increase 4 dB
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => this.goHarder(4)}
          >
            Decrease 4 DB
          </Button>
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.goEasier(2)}
            style={{ margin: 10 }}
          >
            Increase 2 dB
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => this.goHarder(2)}
          >
            Decrease 2 DB
          </Button>
          <hr />
        </div>
      </Container>
    );
  }
}

export default Survey;
