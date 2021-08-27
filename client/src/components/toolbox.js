import React, { Component } from "react";

class Toolbox extends Component {
  render() {
    return (
      <div class="toolbox">
        <div class="buttons">
          <div class="Notes">
            <h2>Notes</h2>
            <button>&#119133;</button>
            <button>&#119134;</button>
            <button>&#119135;</button>
            <button>&#119136;</button>
          </div>
          <div class="rests">
            <h2>Rests</h2>
            <button>&#119100;</button>
            <button>&#119099;</button>
            <button>&#119101;</button>
            <button>&#119102;</button>
          </div>
          <div class="counts">
            <h2>Counts</h2>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>&</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbox;
