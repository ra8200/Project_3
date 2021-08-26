import * as Tone from "tone";

//sixteenth
export function sixteenth() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "16n");
}

//8th & 2 16th
export function eighthTwoSixteenths() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
  synth.triggerAttackRelease("C4", "16n");
  synth.triggerAttackRelease("C4", "16n");
}

//16th 8th 16th
export function sixteenthEighthSixteenth() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "16n");
  synth.triggerAttackRelease("C4", "8n");
  synth.triggerAttackRelease("C4", "16n");
}

//2 16ths 8th
export function twoSixteenthsEighth() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "16n");
  synth.triggerAttackRelease("C4", "16n");
  synth.triggerAttackRelease("C4", "8n");
}

//4 16th
export function fourSixteenths() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "16n");
  synth.triggerAttackRelease("C4", "16n");
  synth.triggerAttackRelease("C4", "16n");
  synth.triggerAttackRelease("C4", "16n");
}

//8th
export function eighth() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}

//2 8ths beamed
export function twoEighths() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
  synth.triggerAttackRelease("C4", "8n");
}

//half
export function half() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "2n");
}

//quarter
export function quarter() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "4n");
}

//whole
export function whole() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "1n");
}
