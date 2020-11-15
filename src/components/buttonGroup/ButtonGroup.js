import React from "react";

function ButtonGroup(props) {
  const buttonWidth = {
    width: "600px"
  };
  return (
    <div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("mei");
          }}
        >
          Step 1
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-secondary btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("micro");
          }}
        >
          Step 2
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-warning btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("corn");
          }}
        >
          Step 3
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("media");
          }}
        >
          Step 4
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
