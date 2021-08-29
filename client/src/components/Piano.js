import _ from "lodash";
import React, { Component } from "react";

import "../../src/App.css";
import Key from "./Key.js";
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from "../global/constants";

class Piano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
    };
  }

  playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  };

  handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    const updatedPressedKeys = [...this.state.pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }
    this.setState({
      pressedKeys: updatedPressedKeys,
    });
    this.playNote(KEY_TO_NOTE[key]);
  };

  handleKeyUp = (event) => {
    const index = this.state.pressedKeys.indexOf(event.key);
    if (index > -1) {
      this.setState((state) => ({
        pressedKeys: state.pressedKeys.splice(index, 1),
      }));
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  };

  render() {
    const keys = _.map(NOTES, (note, index) => {
      return (
        <Key key={index} note={note} pressedKeys={this.state.pressedKeys} />
      );
    });

    const audioFiles = _.map(NOTES, (note, index) => {
      return <audio id={note} key={index} src={`../../notes/${note}.mp3`} />;
    });

    return (
      <div>
        <div className="piano-title">Piano</div>
        <div className="piano">{keys}</div>
        <div>{audioFiles}</div>
        <div className="piano-instructions">Use Z-M as white Keys</div>
      </div>
    );
  }
}

export default Piano;