import React, { Component } from "react";
import "../StarWars.css";

import Card from "../card/Card";

class Container extends Component {
  render() {
    return (
      <div className="container">
        {this.props.data.map((char, i) => (
          <Card character={char} key={`character-${i}`} />
        ))}
      </div>
    );
  }
}

export default Container;
