import * as Tone from 'tone';
import toneTest from './toneTest';

Tone.Transport.bpm(72);
Tone.Transport.schedule((time) => {

}, '4m');

const rhythmInput = [];

const counting = () => {
	const timeSignatureNumerator = 4;

}

document.querySelectorAll('.rhythmButtons').addEventListener('click', )