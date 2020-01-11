import React from "react";
import FormAddComment from "./FormAddComment";
import Comment from "./Comment";
import ModalImage from "./ModalImage";
import Close from "./Close";

import "./style/Modal.css";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      error: null,
      imgModal: []
    };
  }

  componentDidMount() {
    fetch(
      `https://boiling-refuge-66454.herokuapp.com/images/${this.props.idModal}`
    )
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            imgModal: result,
            isLoaded: true
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { imgModal, isLoaded, error } = this.state;

    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <h1>Loading... </h1>;
    } else {
      return (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <div className="img-comments">
                <ModalImage imgModal={imgModal} />

                <div className="modal-comments">
                  {imgModal.comments.length === 0 ? (
                    <p className="no-comments">No comments</p>
                  ) : (
                    imgModal.comments.map(comment => (
                      <Comment key={comment.id} comment={comment} />
                    ))
                  )}
                </div>
              </div>
              <FormAddComment />
            </div>

            <Close toggleModal={this.props.toggleModal} />
          </div>
        </div>
      );
    }
  }
}

export default Modal;
