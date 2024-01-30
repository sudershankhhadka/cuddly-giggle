import "./calc.css";
import { useState } from "react";

function Calculator() {
  const [FirstNumber, setFirstNumber] = useState(0);
  const [SecondNumber, setSecondNumber] = useState(0);
  const [output, setOutput] = useState(0);

  function handleFirstNumberChange(e) {
    console.log("first number:", e.target.value);
    setFirstNumber(e.target.value);
  }

  function handleSecondNumberChange(e) {
    console.log("second number:", e.target.value);
    setSecondNumber(e.target.value);
  }

  function handleAddEvent() {
    var a = parseInt(FirstNumber);
    var b = parseInt(SecondNumber);
    setOutput(a + b);
  }

  function handleSubtractEvent() {
    var a = parseInt(FirstNumber);
    var b = parseInt(SecondNumber);
    setOutput(a - b);
  }

  function handleMultiply() {
    var a = parseInt(FirstNumber);
    var b = parseInt(SecondNumber);
    setOutput(a * b);
  }

  function handleDivideEvent() {
    var a = parseInt(FirstNumber);
    var b = parseInt(SecondNumber);
    setOutput(a / b);
  }

  return (
    <>
      <h1>Calculator</h1>
      <textarea
        value={output}
        name=""
        id="text"
        cols="30"
        rows="10"
        placeholder="output here"
        disabled
      ></textarea>
      <br />
      <input
        type="number"
        placeholder="Enter first number"
        onChange={handleFirstNumberChange}
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Enter second number"
        onChange={handleSecondNumberChange}
      />{" "}
      <br />
      <div id="actions">
        <button onClick={handleAddEvent}>+</button>
        <button onClick={handleSubtractEvent}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivideEvent}>/</button>
      </div>
    </>
  );
}

export default Calculator;
