import React from "react";
import axios from "axios"
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      placeholder: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/chance10113")
      .then((res) => {
        console.log("res", res)
        console.log("res.data", res.data)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  render() {
    return (
      <div className="container">
        <h1>
          {" "}
          U<br></br>N<br></br>D<br></br>E<br></br>R<br></br> <br></br>C<br></br>
          O<br></br>N<br></br>S<br></br>T<br></br>R<br></br>U<br></br>C<br></br>
          T<br></br>I<br></br>O<br></br>N{" "}
        </h1>
      </div>
    );
  }
}

export default App;
