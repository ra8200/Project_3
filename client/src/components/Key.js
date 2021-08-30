import _ from "lodash";
import React, { Component } from "react";

import "../../src/App.css";
import { NOTE_TO_KEY } from "../global/constants";

class Key extends Component {
  noteIsFlat = (note) => {
    return note.length > 1;
  };

  keyDown = (note, pressedKeys) => {
    return _.includes(pressedKeys, NOTE_TO_KEY[note]);
  };

  render() {
    let keyClassName = "key";
    const noteIsFlat = this.noteIsFlat(this.props.note);
    const keyDown = this.keyDown(this.props.note, this.props.pressedKeys);
    if (noteIsFlat) {
      keyClassName += " flat";
    }
    if (keyDown) {
      keyClassName += " pressed";
    }

    let key;
    if (noteIsFlat) {
      key = <div className={keyClassName}></div>;
    } else {
      key = (
        <div className={keyClassName}>
          <div className="key-text">{this.props.note.toUpperCase()}</div>
        </div>
      );
    }
    return key;
  }
}

export default Key;
