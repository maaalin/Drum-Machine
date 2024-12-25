import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [audio, playAudio] = useState(0)

 

  const handleClick = (event) => {
    const id = event.target.innerText;
    playAudio(document.getElementById(id).play())

    const display = document.getElementById("display");
    display.innerText = audioText[id];

  }

  document.addEventListener('keydown', (event) => {
    const keyDown = event.key.toUpperCase();
    playAudio(document.getElementById(keyDown).play());
    display.innerText = audioText[keyDown];
  
});



  const audioText = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open Hi-hat",
    Z: "Kick n Hat",
    X: "Kick",
    C: "Closed Hi-hat"

  }
 

  return (
    <>
      <div id="drum-machine">
        <div id="header">Drum <span id="header-reg"><em>machine</em></span></div>
        <div id="display">
         Press a key or click a drum pad!

        </div>
        <div id="drum-pads">
          <button id="heater-1" className="drum-pad" onClick={handleClick}>
            <audio className="clip" id="Q" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3">
          </audio>
          Q
          </button>

          <button id="heater-2" className="drum-pad" onClick={handleClick}><audio className="clip" id="W" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3">
          </audio>
          W
          </button>

          <button id="heater-3" className="drum-pad" onClick={handleClick}><audio className="clip" id="E" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3">
          </audio>
          E
          </button>

          <button id="heater-4" className="drum-pad" onClick={handleClick}><audio className="clip" id="A" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3">
          </audio>
          A
          </button>

          <button id="clap" className="drum-pad" onClick={handleClick}><audio className="clip" id="S" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3">
          </audio>
          S
          </button>

          <button id="open-hh" className="drum-pad" onClick={handleClick}><audio className="clip" id="D" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3">
          </audio>
          D
          </button>

          <button id="kick-n-hat" className="drum-pad" onClick={handleClick}><audio className="clip" id="Z" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3">
          </audio>
          Z
          </button>

          <button id="kick" className="drum-pad" onClick={handleClick}><audio className="clip" id="X" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3">
          </audio>
          X
          </button>

          <button id="closed-hh" className="drum-pad" onClick={handleClick}><audio className="clip" id="C" 
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3">
          </audio>
          C
          </button>

          

        </div>

        

      </div>

     
  
    </>
  )
}

export default App
