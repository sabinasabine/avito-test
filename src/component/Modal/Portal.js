import React from "react";
import ReactDOM from "react-dom";

const modal = document.getElementById("modal-root");

class Portal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modal.appendChild(this.el);
  }

  componentWillUnmount() {
    modal.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
