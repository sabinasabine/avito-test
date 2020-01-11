import React from "react";
import "./style/FormAddComment.css";

class FormAddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      nameUser: "",
      commentUser: ""
    };
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://boiling-refuge-66454.herokuapp.com/images/${
        this.props.idModal
      }/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nameUser: this.state.commentUser,
          text: this.state.commentUser,
          date: Date.now()
        })
      }
    )
      .then(response => {
        if (!response.ok) {
          console.log("Error");
        } else {
          this.setState({ nameUser: "", commentUser: "" });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { nameUser, commentUser } = this.state;
    return (
      <form className="add-comment">
        <input
          type="text"
          name="nameUser"
          placeholder="Ваше имя"
          value={nameUser}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="commentUser"
          placeholder="Ваш комментарий"
          value={commentUser}
          onChange={this.handleInputChange}
        />
        <button className="modal-submit" onClick={this.handleSubmit}>
          Оставить комментарий
        </button>
      </form>
    );
  }
}

export default FormAddComment;
