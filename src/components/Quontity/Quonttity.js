import React from "react";
import "./Quonttity.css";

const Quontity = ({ count, onDecrementClick, onIncrementClick, minCount }) => {
  return (
    <>
      <div class="quontity">
        <button
          class="decrement"
          onClick={() => onDecrementClick()}
          disabled={count <= minCount}
        >
          -
        </button>
        <input
          class="quontity_input"
          type="number"
          readonly="readonly"
          value={count}
        />
        <button
          class="incriment"
          onClick={() => onIncrementClick()}
          disabled={count >= 10}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Quontity;
