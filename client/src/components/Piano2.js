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
	if (event.key === 'a') {
		playC4();
	}
	if (event.key === 'w') {
		playDb4();
	}
	if (event.key === 's') {
		playD4();
	}
	if (event.key === 'e') {
		playEb4();
	}
	if (event.key === 'd') {
		playE4();
	}
	if (event.key === 'f') {
		playF4();
	}
	if (event.key === 't') {
		playGb4();
	}
	if (event.key === 'g') {
		playG4();
	}
	if (event.key === 'y') {
		playAb4();
	}
	if (event.key === 'h') {
		playA4();
	}
	if (event.key === 'u') {
		playBb4();
	}
	if (event.key === 'j') {
		playB4();
	}
	if (event.key === 'k') {
		playC5();
	}
}

export default function Piano2() {
	return(
		<div className='piano'>
        <div className='white-key' onClick={playC4} onKeyPress={playNote} tabIndex='0'>A</div>
        <div className='black-key' onClick={playDb4} onKeyPress={playNote} tabIndex='0'>W</div>
        <div className='white-key' onClick={playD4} onKeyPress={playNote} tabIndex='0'>S</div>
        <div className='black-key' onClick={playEb4} onKeyPress={playNote} tabIndex='0'>E</div>
        <div className='white-key' onClick={playE4} onKeyPress={playNote} tabIndex='0'>D</div>
        <div className='white-key' onClick={playF4} onKeyPress={playNote} tabIndex='0'>F</div>
        <div className='black-key' onClick={playGb4} onKeyPress={playNote} tabIndex='0'>T</div>
        <div className='white-key' onClick={playG4} onKeyPress={playNote} tabIndex='0'>G</div>
        <div className='black-key' onClick={playAb4} onKeyPress={playNote} tabIndex='0'>Y</div>
        <div className='white-key' onClick={playA4} onKeyPress={playNote} tabIndex='0'>H</div>
        <div className='black-key' onClick={playBb4} onKeyPress={playNote} tabIndex='0'>U</div>
        <div className='white-key' onClick={playB4} onKeyPress={playNote} tabIndex='0'>J</div>
        <div className='white-key' onClick={playC5} onKeyPress={playNote} tabIndex='0'>K</div>
      </div>
	);
}
