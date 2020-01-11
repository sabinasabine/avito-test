import React from "react";
import "./style/Comment.css";

function Comment(props) {
  const transformDate = date => {
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = addZero(newDate.getMonth() + 1);
    let day = addZero(newDate.getDate());
    return `${day}.${month}.${year}`;
  };

  const addZero = date => {
    if (date < 10) {
      date = "0" + date;
    }
    return date;
  };
  return (
    <div className="modal-comment" key={props.comment.id}>
      <p className="comment-date">{transformDate(props.comment.date)}</p>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default Comment;
