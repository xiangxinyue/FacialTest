import React from "react";
import { Button } from "@material-ui/core";

export default (props) => {
  return (
    <div>
      <h5 className="font-weight-light">
        Make sure you’re in a quiet place with headphones connected!
      </h5>
      <Button
        color="primary"
        variant="contained"
        size="large"
        style={{ margin: 20, width: 200, backgroundColor: "black" }}
        onClick={props.handleNext}
      >
        Next
      </Button>
    </div>
  );
};
