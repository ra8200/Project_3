import React from 'react';
import { Tone } from 'tone';

const synth = new Tone.Synth().toDestination();
const now = Tone.now();

let banana = () => {
	console.log('doot');
	synth.triggerAttack('C#4', now);
	synth.triggerRelease(now + 1);
}

document.getElementById('toneTestButton').addEventListener('click', banana());

