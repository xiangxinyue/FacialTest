import React from "react";
import { Container, Button } from "@material-ui/core";

export default (props) => {
  return (
    <Container>
      <div
        className="jumbotron"
        style={{
          marginTop: "5%",
        }}
      >
        <h4>
          We would now like you to do a task that involves pressing the computer
          keys in response to words and images that will appear in the centre of
          the screen. Please familiarise yourself with them, then press NEXT.
        </h4>
        <hr />
        <div className="row">
          <div className="col-3">
            <h5>Positive words:</h5>
            <ul>
              <li>Successful</li>
              <li>Dynamic</li>
              <li>Achiever</li>
              <li>Accomplished</li>
              <li>Motivated</li>
            </ul>
          </div>
          <div className="col-3">
            <h5>Negative words:</h5>
            <ul>
              <li>Failure</li>
              <li>Dull</li>
              <li>Limited</li>
              <li>Ordinary</li>
              <li>Unmotivated</li>
            </ul>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="row">
          <img
            src={process.env.PUBLIC_URL + "/pictures/001.jpg"}
            style={{ width: "15%" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/pictures/002.jpg"}
            style={{ width: "15%" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/pictures/003.jpg"}
            style={{ width: "15%" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/pictures/004.jpg"}
            style={{ width: "15%" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/pictures/005.jpg"}
            style={{ width: "15%" }}
          />
        </div>
        <hr />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={props.handleClick}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
