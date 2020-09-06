import React from "react";
import { Input, Container, CircularProgress } from "@material-ui/core";

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noise: new Audio(process.env.PUBLIC_URL + "/audios/noise.wav"),
      noiseVolume: this.props.volume / 100,
      audioVolume: this.props.volume / 100,
      realAnswer: "",
      focus: 0,
      input1: "",
      input2: "",
      input3: "",
      step: 1,
      disabled: true,
      loading: true,
      time: 0,
      timer: [],
      dbs: [0],
    };
    this.input1 = React.createRef();
    this.input2 = React.createRef();
    this.input3 = React.createRef();
  }

  componentDidMount = async () => {
    // preload audios
    const noise = new Audio(process.env.PUBLIC_URL + "/audios/noise.wav");
    await noise.play();
    await noise.pause();
    for (let i = 1; i < 10; i++) {
      const audio = new Audio(process.env.PUBLIC_URL + "/audios/" + i + ".wav");
      audio.volume = 0;
      await audio.play();
    }
    // real testig starts
    console.log("Finish preload audios");
    this.setState({ loading: false });
    await this._focus();
    this.handlePlay();
  };

  componentDidUpdate = () => {
    this._focus();
  };

  _focus = () => {
    const { focus } = this.state;
    switch (focus) {
      case 0:
        return this.input1.focus();
      case 1:
        return this.input2.focus();
      case 2:
        return this.input3.focus();
      default:
        return null;
    }
  };

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

  handlePlay = async () => {
    const { audioVolume, noiseVolume, timer, noise } = this.state;
    console.log("Signal Volume: " + audioVolume);
    console.log("Noise Volume: " + noiseVolume);
    await this.setState({ disabled: true });
    if (this.state.time !== 0) {
      this.stopTimer();
      timer.push(Number(this.state.time).toFixed(2));
      this.resetTimer();
      this.setState({ timer });
    }
    console.log("Timer:", this.state.timer);
    console.log("DB:", this.state.dbs);
    const audios = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * 9) + 1;
      await this.setState({
        realAnswer: this.state.realAnswer + index.toString(),
      });
      audios.push(
        new Audio(process.env.PUBLIC_URL + "/audios/" + index + ".wav")
      );
    }
    setTimeout(() => {
      noise.volume = noiseVolume;
      noise.play();
    }, 100);
    setTimeout(() => {
      const audio = audios[0];
      audio.volume = audioVolume;
      audio.play();
    }, 500);
    setTimeout(() => {
      const audio = audios[1];
      audio.volume = audioVolume;
      audio.play();
    }, 1700);
    setTimeout(() => {
      const audio = audios[2];
      audio.volume = audioVolume;
      audio.play();
    }, 2900);
    setTimeout(() => {
      noise.pause();
      this.setState({ disabled: false });
      this.startTimer();
    }, 4100);
  };

  checkAnswer = async () => {
    const { realAnswer, input1, input2, input3, step } = this.state;
    const userAnswer = input1 + input2 + input3;
    console.log("Real Answer: " + realAnswer);
    console.log("User Answer: " + userAnswer);
    if (realAnswer !== userAnswer) {
      const audioVolume = this.goEasier(step);
      await this.setState({ audioVolume });
      console.log(
        "WRONG, increasing audio volume to " + this.state.audioVolume
      );
    } else {
      const audioVolume = this.goHarder(step);
      await this.setState({ audioVolume });
      console.log(
        "RIGHT, decreasing audio volume to " + this.state.audioVolume
      );
    }
    if (step !== 20) {
      this.setState({
        realAnswer: "",
        input1: "",
        input2: "",
        input3: "",
        step: step + 1,
      });
      this.handlePlay();
    } else {
      // Timer
      this.stopTimer();
      const timer = this.state.timer;
      timer.push(Number(this.state.time).toFixed(2));
      // SNR
      let sum = 0;
      for (let i = 15; i < 20; i++) {
        sum += this.state.dbs[i];
      }
      const SNR = Number(sum / 5).toFixed(2);
      // const SNR = Number(10 * Math.log(Math.abs(avg))).toFixed(3);
      console.log("SNR is " + SNR);
      // return SNR and Timer
      this.props.handleFinish(SNR, timer);
    }
  };

  goEasier = () => {
    const { audioVolume, step, dbs } = this.state;
    if (step <= 4) {
      dbs.push(dbs[step - 1] + 4);
      this.setState({ dbs });
      if (audioVolume * 10 ** (4 / 20) > 1) {
        return 1;
      } else {
        return audioVolume * 10 ** (4 / 20);
      }
    } else {
      dbs.push(dbs[step - 1] + 2);
      this.setState({ dbs });
      if (audioVolume * 10 ** (2 / 20) > 1) {
        return 1;
      } else {
        return audioVolume * 10 ** (2 / 20);
      }
    }
  };

  goHarder = () => {
    const { audioVolume, step, dbs } = this.state;
    if (step <= 4) {
      dbs.push(dbs[step - 1] - 4);
      this.setState({ dbs });
      return audioVolume * 10 ** (-4 / 20);
    } else {
      dbs.push(dbs[step - 1] - 2);
      this.setState({ dbs });
      return audioVolume * 10 ** (-2 / 20);
    }
  };

  changeAnswer = async (value) => {
    const { focus } = this.state;
    switch (focus) {
      case 0:
        return await this.setState({ input1: value, focus: 1 });
      case 1:
        return await this.setState({ input2: value, focus: 2 });
      case 2:
        await this.setState({ input3: value, focus: 0 });
        return this.checkAnswer();
      default:
        return null;
    }
  };

  renderInputs = () => {
    const { focus, input1, input2, input3, disabled, loading } = this.state;
    return (
      <div>
        <Input
          value={input1}
          disabled={disabled || focus !== 0}
          inputRef={(input) => {
            this.input1 = input;
          }}
          inputProps={{
            maxLength: 1,
          }}
          required={true}
          onChange={(e) => this.changeAnswer(e.target.value)}
          style={{ width: 30, marginRight: 30 }}
        />
        <Input
          value={input2}
          disabled={disabled || focus !== 1}
          inputRef={(input) => {
            this.input2 = input;
          }}
          inputProps={{
            maxLength: 1,
          }}
          required={true}
          onChange={(e) => this.changeAnswer(e.target.value)}
          style={{ width: 30 }}
        />
        <Input
          value={input3}
          disabled={disabled || focus !== 2}
          inputRef={(input) => {
            this.input3 = input;
          }}
          inputProps={{
            maxLength: 1,
          }}
          required={true}
          onChange={(e) => this.changeAnswer(e.target.value)}
          style={{ width: 30, marginLeft: 30 }}
        />
        {loading ? (
          <div>
            <CircularProgress />
            Loading ...{" "}
          </div>
        ) : null}
      </div>
    );
  };

  render() {
    const { step } = this.state;
    return (
      <Container style={{ textAlign: "center" }}>
        <div style={{ marginTop: "10%", marginBottom: "10%" }}>
          <div>
            <h5 className="font-weight-light">
              Use your keyboard to enter the numbers you hear
            </h5>
          </div>
          {this.renderInputs()}
          <h6 className="font-weight-lighter" style={{ marginTop: 10 }}>
            Step {step} of 20
          </h6>
        </div>
      </Container>
    );
  }
}

export default Survey;
