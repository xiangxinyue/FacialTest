import React from "react";
import {
  Container,
  Button,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";

class Birth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: null,
      gender: null,
    };
  }

  renderButton = () => {
    const { birth, gender } = this.state;
    if (birth !== null && gender !== null) {
      return (
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{
            width: 100,
            margin: 10,
          }}
          onClick={() => this.props.handleClick()}
        >
          ok
        </Button>
      );
    } else {
      return (
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{
            width: 100,
            margin: 10,
          }}
          disabled={true}
        >
          ok
        </Button>
      );
    }
  };

  render() {
    return (
      <Container>
        <div
          className="jumbotron"
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "10%",
          }}
        >
          <h1>Select your gender:</h1>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.gender}
              style={{ width: 80 }}
              onChange={(e) => this.setState({ gender: e.target.value })}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <br /> <br />
          <h1>Select your year of birth:</h1>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.birth}
              style={{ width: 80 }}
              onChange={(e) => this.setState({ birth: e.target.value })}
            >
              <MenuItem value={1920}>1920</MenuItem>
              <MenuItem value={1921}>1921</MenuItem>
              <MenuItem value={1922}>1922</MenuItem>
              <MenuItem value={1923}>1923</MenuItem>
              <MenuItem value={1924}>1924</MenuItem>
              <MenuItem value={1925}>1925</MenuItem>
              <MenuItem value={1926}>1926</MenuItem>
              <MenuItem value={1927}>1927</MenuItem>
              <MenuItem value={1928}>1928</MenuItem>
              <MenuItem value={1929}>1929</MenuItem>
              <MenuItem value={1930}>1930</MenuItem>
              <MenuItem value={1931}>1931</MenuItem>
              <MenuItem value={1932}>1932</MenuItem>
              <MenuItem value={1933}>1933</MenuItem>
              <MenuItem value={1934}>1934</MenuItem>
              <MenuItem value={1935}>1935</MenuItem>
              <MenuItem value={1936}>1936</MenuItem>
              <MenuItem value={1937}>1937</MenuItem>
              <MenuItem value={1938}>1938</MenuItem>
              <MenuItem value={1939}>1939</MenuItem>
              <MenuItem value={1940}>1940</MenuItem>
              <MenuItem value={1941}>1941</MenuItem>
              <MenuItem value={1942}>1942</MenuItem>
              <MenuItem value={1943}>1943</MenuItem>
              <MenuItem value={1944}>1944</MenuItem>
              <MenuItem value={1945}>1945</MenuItem>
              <MenuItem value={1946}>1946</MenuItem>
              <MenuItem value={1947}>1947</MenuItem>
              <MenuItem value={1948}>1948</MenuItem>
              <MenuItem value={1949}>1949</MenuItem>
              <MenuItem value={1950}>1950</MenuItem>
              <MenuItem value={1951}>1951</MenuItem>
              <MenuItem value={1952}>1952</MenuItem>
              <MenuItem value={1953}>1953</MenuItem>
              <MenuItem value={1954}>1954</MenuItem>
              <MenuItem value={1955}>1955</MenuItem>
              <MenuItem value={1956}>1956</MenuItem>
              <MenuItem value={1957}>1957</MenuItem>
              <MenuItem value={1958}>1958</MenuItem>
              <MenuItem value={1959}>1959</MenuItem>
              <MenuItem value={1960}>1960</MenuItem>
              <MenuItem value={1961}>1961</MenuItem>
              <MenuItem value={1962}>1962</MenuItem>
              <MenuItem value={1963}>1963</MenuItem>
              <MenuItem value={1964}>1964</MenuItem>
              <MenuItem value={1965}>1965</MenuItem>
              <MenuItem value={1966}>1966</MenuItem>
              <MenuItem value={1967}>1967</MenuItem>
              <MenuItem value={1968}>1968</MenuItem>
              <MenuItem value={1969}>1969</MenuItem>
              <MenuItem value={1970}>1970</MenuItem>
              <MenuItem value={1971}>1971</MenuItem>
              <MenuItem value={1972}>1972</MenuItem>
              <MenuItem value={1973}>1973</MenuItem>
              <MenuItem value={1974}>1974</MenuItem>
              <MenuItem value={1975}>1975</MenuItem>
              <MenuItem value={1976}>1976</MenuItem>
              <MenuItem value={1977}>1977</MenuItem>
              <MenuItem value={1978}>1978</MenuItem>
              <MenuItem value={1979}>1979</MenuItem>
              <MenuItem value={1920}>1980</MenuItem>
              <MenuItem value={1981}>1981</MenuItem>
              <MenuItem value={1982}>1982</MenuItem>
              <MenuItem value={1983}>1983</MenuItem>
              <MenuItem value={1984}>1984</MenuItem>
              <MenuItem value={1985}>1985</MenuItem>
              <MenuItem value={1986}>1986</MenuItem>
              <MenuItem value={1987}>1987</MenuItem>
              <MenuItem value={1988}>1988</MenuItem>
              <MenuItem value={1989}>1989</MenuItem>
              <MenuItem value={1990}>1990</MenuItem>
              <MenuItem value={1991}>1991</MenuItem>
              <MenuItem value={1992}>1992</MenuItem>
              <MenuItem value={1993}>1993</MenuItem>
              <MenuItem value={1994}>1994</MenuItem>
              <MenuItem value={1995}>1995</MenuItem>
              <MenuItem value={1996}>1996</MenuItem>
              <MenuItem value={1997}>1997</MenuItem>
              <MenuItem value={1998}>1998</MenuItem>
              <MenuItem value={1999}>1999</MenuItem>
              <MenuItem value={2000}>2000</MenuItem>
              <MenuItem value={2001}>2001</MenuItem>
              <MenuItem value={2002}>2002</MenuItem>
              <MenuItem value={2003}>2003</MenuItem>
              <MenuItem value={2004}>2004</MenuItem>
              <MenuItem value={2005}>2005</MenuItem>
              <MenuItem value={2006}>2006</MenuItem>
              <MenuItem value={2007}>2007</MenuItem>
              <MenuItem value={2008}>2008</MenuItem>
              <MenuItem value={2009}>2009</MenuItem>
              <MenuItem value={2010}>2010</MenuItem>
              <MenuItem value={2011}>2011</MenuItem>
              <MenuItem value={2012}>2012</MenuItem>
              <MenuItem value={2013}>2013</MenuItem>
              <MenuItem value={2014}>2014</MenuItem>
              <MenuItem value={2015}>2015</MenuItem>
              <MenuItem value={2016}>2016</MenuItem>
              <MenuItem value={2017}>2017</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          {this.renderButton()}
        </div>
      </Container>
    );
  }
}

export default Birth;
