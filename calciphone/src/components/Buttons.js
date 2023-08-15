import React from "react";
import "./styles/Buttons.css";

const Buttons = ({
  inputHandler,
  clearHandler,
  Remove,
  PosNegHandler,
  calculate,
}) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="show-button">
      <button className="button inp" onClick={inputHandler}>
        ^
      </button>
      <button className="button inp" onClick={inputHandler}>
        (
      </button>
      <button className="button inp" onClick={inputHandler}>
        )
      </button>
      <button className="button inp" onClick={inputHandler}>
        √
      </button>
      <button className="button inp" onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className="button del" onClick={clearHandler}>
        AC
      </button>
      <button className="button del" onClick={Remove}>
        ⌫
      </button>
      <button className="button inp" onClick={inputHandler}>
        log
      </button>
      <button className="button inp" onClick={inputHandler}>
        ÷
      </button>
      <button className="button inp" onClick={inputHandler}>
        %
      </button>
      <button className="button" onClick={inputHandler}>
        7
      </button>
      <button className="button" onClick={inputHandler}>
        8
      </button>
      <button className="button" onClick={inputHandler}>
        9
      </button>
      <button className="button inp" onClick={inputHandler}>
        x
      </button>
      <button className="button inp" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className="button" onClick={inputHandler}>
        4
      </button>
      <button className="button" onClick={inputHandler}>
        5
      </button>
      <button className="button" onClick={inputHandler}>
        6
      </button>
      <button className="button inp" onClick={inputHandler}>
        -
      </button>
      <button className="button inp" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className="button" onClick={inputHandler}>
        1
      </button>
      <button className="button" onClick={inputHandler}>
        2
      </button>
      <button className="button" onClick={inputHandler}>
        3
      </button>
      <button className="button inp" onClick={inputHandler}>
        +
      </button>
      <button className="button inp" onClick={inputHandler}>
        !
      </button>
      <button className="button inp" onClick={PosNegHandler}>
        ±
      </button>
      <button className="button" onClick={inputHandler}>
        0
      </button>
      <button className="button inp" onClick={inputHandler}>
        .
      </button>
      <button className="button inp equal" id="equalbtn" onClick={calculate}>
        =
      </button>
    </div>
  );
};

export default Buttons;
