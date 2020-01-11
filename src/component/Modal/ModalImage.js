import React from "react";
import "./style/ModalImage.css";

function ModalImage(props) {
  return (
    <div className="modal-img">
      <img src={props.imgModal.url} alt="img" />
    </div>
  );
}

export default ModalImage;
