import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();
const now = Tone.now();

synth.triggerAttack('C#4', now);
synth.triggerRelease(now + 1);