import React from "react";
import { Button } from "@material-ui/core";

export default (props) => {
  return (
    <div>
      <h5>You have completed the test! Click ‘SUBMIT’ to view your results</h5>
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={props.handleSubmit}
        style={{
          backgroundColor: "black",
          borderRadius: "100%",
          height: 80,
          width: 80,
        }}
      >
        Submit
      </Button>
    </div>
  );
};
