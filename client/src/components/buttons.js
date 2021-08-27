import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div class="buttonBox">
        <div class="buttons">
          Buttons here:
          <button>Whole Note</button>
          <button>Whole Rest</button>
          <button>Half Note</button>
          <button>Half Rest</button>
          <button>Quarter Note</button>
          <button>Quarter Rest</button>
          <button>Eighth Note</button>
          <button>Eighth Rest</button>
        </div>
      </div>
    );
  }
}

export default Buttons;
