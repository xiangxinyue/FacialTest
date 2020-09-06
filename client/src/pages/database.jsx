import React from "react";
import axios from "axios";
import Table from "../assets/table";
import { Container } from "@material-ui/core";

class Database extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  componentDidMount = async () => {
    const doc = await axios.get("/api/data");
    this.setState({ rows: doc.data });
  };

  handleDelete = async (id) => {
    await axios.delete("/api/data/" + id);
    this.componentDidMount();
  };

  render() {
    const { rows } = this.state;

    return rows.length === 0 ? null : (
      <Container style={{ marginTop: "10%" }}>
        <Table rows={rows} handleDelete={this.handleDelete} />
      </Container>
    );
  }
}

export default Database;
