import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello !</h2>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
