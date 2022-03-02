import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Spinner() {
  return (
    <div className="contentWrap"
        style={{
            width: "100%",
            height: "100vh",
            position: "relative"
        }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BeatLoader
          color="#e59703"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
}

export default Spinner;