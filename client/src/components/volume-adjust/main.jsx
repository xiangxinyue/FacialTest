import React from "react";
import { Button, Container } from "@material-ui/core";
import VolumeSlider from "../../assets/volume-slider";

class VolumeAdjustment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeAdjuest: false,
      audio: new Audio(process.env.PUBLIC_URL + "/audios/adjust.wav"),
      audioPlay: false,
      audioVolume: 0.5,
    };
  }
  componentDidMount = () => {
    const { audio, audioVolume } = this.state;
    audio.volume = audioVolume;
  };

  componentDidUpdate = () => {
    const { audio, audioVolume } = this.state;
    audio.volume = audioVolume;
  };

  calculateDB = (audio) => {
    const audioCtx = new AudioContext();
    // const processor = audioCtx.createScriptProcessor(2048, 1, 1);
    const processor = audioCtx.createScriptProcessor(0, 1, 1);
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(processor);
    source.connect(audioCtx.destination);
    processor.connect(audioCtx.destination);
    processor.onaudioprocess = function (evt) {
      const input = evt.inputBuffer.getChannelData(0);
      const len = input.length;
      let total = 0;
      let i = 0;
      let rms; // root mean square
      while (i < len) total += Math.abs(input[i++]);
      rms = Math.sqrt(total / len);
      // rms = Math.sqrt(total / (len / 2));
      // const decibel = 20 * (Math.log(rms) / Math.log(10));
      console.log(rms * 100);
    };
  };

  handleHeadPhone = () => {
    const { volumeAdjuest } = this.state;
    this.setState({ volumeAdjuest: !volumeAdjuest });
  };

  handleSpeaker = () => {
    const { volumeAdjuest } = this.state;
    this.setState({ volumeAdjuest: !volumeAdjuest });
  };

  handlePlay = async () => {
    const { audio } = this.state;
    // this.calculateDB(audio);
    await audio.play();
    this.setState({ audioPlay: true });
  };

  handleStop = async () => {
    const { audio } = this.state;
    await audio.pause();
    this.setState({ audioPlay: false });
  };

  handleNext = async () => {
    await this.handleStop();
    this.props.handleNext();
  };

  handleVolume = (volume) => {
    this.setState({ audioVolume: volume / 100 });
    this.props.handleVolume(volume);
  };

  askAudioOutput = () => {
    const { audioPlay } = this.state;
    return (
      <div>
        <Container>
          <h6 className="font-weight-light">
            Set your device volume to the half. Click PLAY to listen to an audio
            sample.
          </h6>
          <h6 className="font-weight-light">
            Slide the volume to a comfortable listening level. After that, click
            NEXT to begin the test.
          </h6>
        </Container>

        <div className="row">
          <VolumeSlider handleVolume={this.handleVolume} />
          {audioPlay ? (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleStop}
              style={{ margin: 5, width: 150, backgroundColor: "black" }}
            >
              Stop
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handlePlay}
              style={{
                margin: 5,
                width: 150,
                backgroundColor: "black",
              }}
            >
              Play
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 5, width: 150, backgroundColor: "black" }}
            onClick={this.handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.askAudioOutput()}</div>;
  }
}

export default VolumeAdjustment;
