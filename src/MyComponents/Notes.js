import React from "react";

export const Notes = (props) => {
  const handleDelete = () => {
    // e.preventDefault();
    //ondelete();
    props.onDelete(props.sno);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
