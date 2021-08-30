import * as Tone from 'tone';

export function playC4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('C4', '8n');
}

export function playDb4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('Db4', '8n');
}

export function playD4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('D4', '8n');
}

export function playEb4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('Eb4', '8n');
}

export function playE4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('E4', '8n');
}

export function playF4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('F4', '8n');
}

export function playGb4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('Gb4', '8n');
}

export function playG4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('G4', '8n');
}

export function playAb4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('Ab4', '8n');
}

export function playA4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('A4', '8n');
}

export function playBb4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('Bb4', '8n');
}

export function playB4() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('B4', '8n');
}

export function playC5() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('C5', '8n');
}

export function playNote(event) {
	if (event.keyCode === 65) {
		playC4();
	}
	if (event.keyCode === 87) {
		playDb4();
	}
	if (event.keyCode === 83) {
		playD4();
	}
	if (event.keyCode === 69) {
		playEb4();
	}
	if (event.keyCode === 68) {
		playE4();
	}
	if (event.keyCode === 70) {
		playF4();
	}
	if (event.keyCode === 84) {
		playGb4();
	}
	if (event.keyCode === 71) {
		playG4();
	}
	if (event.keyCode === 89) {
		playAb4();
	}
	if (event.keyCode === 72) {
		playA4();
	}
	if (event.keyCode === 85) {
		playBb4();
	}
	if (event.keyCode === 74) {
		playB4();
	}
	if (event.keyCode === 75) {
		playC5();
	}
}

export default function Piano2() {
	return(
		<div className='piano'>
        <div className='white-key' onClick={playC4}>A</div>
        <div className='black-key' onClick={playDb4}>W</div>
        <div className='white-key' onClick={playD4}>S</div>
        <div className='black-key' onClick={playEb4}>E</div>
        <div className='white-key' onClick={playE4}>D</div>
        <div className='white-key' onClick={playF4}>F</div>
        <div className='black-key' onClick={playGb4}>T</div>
        <div className='white-key' onClick={playG4}>G</div>
        <div className='black-key' onClick={playAb4}>Y</div>
        <div className='white-key' onClick={playA4}>H</div>
        <div className='black-key' onClick={playBb4}>U</div>
        <div className='white-key' onClick={playB4}>J</div>
        <div className='white-key' onClick={playC5}>K</div>
      </div>
	)
}