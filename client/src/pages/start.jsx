import React from "react";
import { Container, Button } from "@material-ui/core";

export default (props) => {
  const randomPage = () => {
    const index = Math.floor(Math.random() * 3);
    if (index === 0) {
      props.history.push("/version1");
    } else if (index === 1) {
      props.history.push("/version2");
    } else {
      props.history.push("/version3");
    }
  };
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          marginTop: "20%",
        }}
      >
        <h5>Click the ‘START’ button to begin the hearing test</h5>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={randomPage}
          style={{
            backgroundColor: "black",
            borderRadius: "100%",
            height: 80,
            width: 80,
          }}
        >
          Start
        </Button>
      </div>
    </Container>
  );
};
