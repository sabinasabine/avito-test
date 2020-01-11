import React from "react";
import "./style/Image.css";

function Image(props) {
  return (
    <div className="single-img">
      <img
        src={props.item.url}
        className="singleImg"
        alt="img"
        id={props.item.id}
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Image;
