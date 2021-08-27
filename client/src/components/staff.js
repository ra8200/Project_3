import React, { Component } from "react";

class Staff extends Component {
  render() {
    return (
      <div>
        <div class="staffBox">
          <div class="staff">Staff Here</div>
        </div>
        <div>
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

export default Staff;
