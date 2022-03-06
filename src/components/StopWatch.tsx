import { useState } from "react";
import useInterval from "../customHooks/useInterval";

const StopWatch = () => {
  const [value, setValue] = useState<number>(0);
  const [delay, setDelay] = useState<number | null>(null);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);

  const callbackFn = () => {
    setValue(value + 1);
    setSeconds(seconds + 1);
  };
  useInterval(callbackFn, delay);

  const handleReset = () => {
    setSeconds(0);
    setDelay(null);
    setValue(0);
  };

  const handleStart = () => {
    setDelay(1000);
  };

  const handlePause = () => {
    setDelay(null);
  };

  if (seconds >= 60) {
    setMinutes(minutes + 1);
    setSeconds(0);
  }

  if (minutes >= 60) {
    setHours(hours + 1);
  }

  return (
    <div>
      <h1>StopWatch</h1>
      <div>
        <p>
          {hours} : {minutes} : {seconds}
        </p>
      </div>
      <div className="actionBtns">
        <button onClick={handleStart} disabled={!!delay}>
          Start
        </button>
        <button onClick={handlePause} disabled={!delay}>
          Pause
        </button>
        <button onClick={handleReset} disabled={!delay && value === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
