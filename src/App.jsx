import { useMemo, useState } from "react";
import "./App.css";

function App() {

  const [weightState, setWeightState] = useState(40);
  const [heightState, setHeightState] = useState(40);

  const handleWeightChange = (e) => {
    const weight = e.target.value;
    setWeightState(weight);
    console.log(weight);
  };
  const handleHeightChange = (e) => {
    const height = e.target.value;
    setHeightState(height);
    console.log(height);
  };

  const output = useMemo(()=>{
    const heightInMeter = heightState/100;
    return (weightState/(heightInMeter*heightInMeter)).toFixed(1)
  },[weightState, heightState]);

  return (
    <main>
      <div className=" items-center flex justify-center">
        <div className="w-2/4 border border-black border-solid rounded-md mt-20">
          <h1 className="bg-blue-700 p-5 text-4xl text-white flex justify-center">
            Project 4: BMI Calculator
          </h1>
          <div className="input-section items-center">
            <p className="slider-output flex justify-center text-lg">Weight: {weightState} kg</p>
            <center>
            <input
              onChange={handleWeightChange}
              className="input-slider  w-3/4 h-5"
              type="range"
              step="1"
              min="40"
              max="200"
            />
            </center>
          </div>
          <div className="input-section">
            <p className="slider-output flex justify-center text-lg">Height: {heightState} cm</p>
            <center>
            <input
              onChange={handleHeightChange}
              className="input-slider w-3/4 h-5"
              type="range"
              step="1"
              min="40"
              max="200"
            />
            </center>
          </div>

          <center>
          <div>
            <p className="text-lg font-medium">Your BMI is </p>
            <h1 className="p-5 text-lg font-medium rounded-md">{output}</h1>
          </div>
          </center>
        </div>
      </div>
    </main>
  );
}

export default App;
