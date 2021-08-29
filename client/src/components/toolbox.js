import React, { Component } from "react";

class Toolbox extends Component {
  render() {
    return (
      <div className="toolbox">
        <div className="buttons">
          <div className="notes">
            <h2>Notes</h2>
            <button>&#119133;</button>
            <button>&#119134;</button>
            <button>&#119135;</button>
            <button>&#119136;</button>
          </div>
          <div className="rests">
            <h2>Rests</h2>
            <button>&#119100;</button>
            <button>&#119099;</button>
            <button>&#119101;</button>
            <button>&#119102;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbox;
