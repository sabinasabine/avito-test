import React from "react";
import "./style/Close.css";

function Close(props) {
  return (
    <span className="close-btn" onClick={props.toggleModal}>
      &times;
    </span>
  );
}

export default Close;
