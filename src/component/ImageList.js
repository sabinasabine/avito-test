import React from "react";
import Image from "./Image";

import "./style/ImageList.css";

function ImageList(props) {
  return (
    <div className="images-wrap">
      {props.imgArr.map(item => (
        <Image key={item.id} item={item} handleClick={props.handleClick} />
      ))}
    </div>
  );
}

export default ImageList;
