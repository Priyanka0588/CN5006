import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleClick = (e) => {
    const value = e.target.value;


    if (value === "C") {
      setText("");
      setShowImage(false);
    } else if (value === "=") {
      try {
        setText(eval(text));
      } catch {
        setText("Error");
      }
    } else if (value === "Show Me") {
      setShowImage(true);
    } else if (value === "Square") {
      setText(Math.pow(Number(text), 2).toString());
    } else {
      setText(text + value);
    }
  };

  return (
    <div className="Calculator">
      {/* Calculator Screen */}
      <div className="screen-row">
        <input type="text" readOnly value={text} />
      </div>

      {/* Image Display */}
      {showImage && (
        <div className="image-container">
          <img
            src="https://via.placeholder.com/150"
            alt="Your Image"
            className="image"
          />
        </div>
      )}

      {/* Calculator Buttons */}
      <div className="button-row">
        <Button label="(" handleClick={handleClick} />
        <Button label="CE" handleClick={handleClick} />
        <Button label=")" handleClick={handleClick} />
        <Button label="C" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="1" handleClick={handleClick} />
        <Button label="2" handleClick={handleClick} />
        <Button label="3" handleClick={handleClick} />
        <Button label="+" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="4" handleClick={handleClick} />
        <Button label="5" handleClick={handleClick} />
        <Button label="6" handleClick={handleClick} />
        <Button label="-" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="7" handleClick={handleClick} />
        <Button label="8" handleClick={handleClick} />
        <Button label="9" handleClick={handleClick} />
        <Button label="*" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="." handleClick={handleClick} />
        <Button label="0" handleClick={handleClick} />
        <Button label="=" handleClick={handleClick} />
        <Button label="/" handleClick={handleClick} />
      </div>

      <div className="button-row">
        <Button label="Show Me" handleClick={handleClick} />
        <Button label="Square" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;

